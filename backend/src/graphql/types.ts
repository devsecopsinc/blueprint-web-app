import { StringRecord } from '../utils/types/common'

export type EventData<T extends StringRecord> = T

export interface HasuraEvent {
  session_variables: StringRecord
  op: 'INSERT' | 'UPDATE' | 'DELETE'
  data: {
    old: any
    new: any
  }
}
