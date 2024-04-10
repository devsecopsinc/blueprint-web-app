import * as uuid from 'uuid'

const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i

export const getUuidFromName = (name: string, namespace = ''): string => uuid.v5(`${name}-${namespace}`, uuid.v5.URL)
export const isUuid = (value: string) => uuidRegex.test(value)
export const generateUuid = () => uuid.v4()
