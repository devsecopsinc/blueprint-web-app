#!/usr/bin/env bash
set -euo

CONTAINER_NAME=$1
ECS_CLUSTER_NAME=$2
ECS_SERVICE_ID=$3
TASK_DEFINITION_NAME=$4
REPOSITORY_URI=$5
IMAGE_TAG=$6

function register_new_task_definition() {
    echo "Create taskdef.json from current task definition" >&2
    aws ecs describe-task-definition --task-definition "${TASK_DEFINITION_NAME}" | jq '.taskDefinition | del(.compatibilities, .registeredAt, .registeredBy, .requiresAttributes, .revision, .status, .taskDefinitionArn)' > task.definition

    echo "Update image version in task definition" >&2
    cat task.definition | jq '(.containerDefinitions[] | select(.name == "'$CONTAINER_NAME'").image) |= "'$REPOSITORY_URI':'$IMAGE_TAG'"' | jq '.' > task.definition.1

    echo "Register new version of task definition" >&2
    aws ecs register-task-definition --cli-input-json file://task.definition.1
}

echo "Container name: $CONTAINER_NAME"
echo "ECS cluster name: $ECS_CLUSTER_NAME"
echo "ECS service ID: $ECS_SERVICE_ID"
echo "Task definition name: $TASK_DEFINITION_NAME"
echo "Repository URI: $REPOSITORY_URI"
echo "Image tag: $IMAGE_TAG"

echo "Create taskdef.json from current task definition"
aws ecs describe-task-definition --task-definition "${TASK_DEFINITION_NAME}" | jq '.taskDefinition' > taskdef.json

echo "Register new task definition with ECS and update service"
aws ecs update-service --task-definition "$(register_new_task_definition | jq -r '.taskDefinition.taskDefinitionArn')" --cluster "${ECS_CLUSTER_NAME}" --service "${ECS_SERVICE_ID}"
