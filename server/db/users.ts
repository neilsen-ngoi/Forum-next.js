import connection from './connection'

export function getUsers(db = connection) {
  return db('users').select('id', 'name').orderBy('id')
}
