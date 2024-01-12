/* eslint-disable @typescript-eslint/no-unsafe-argument */
import superagent from 'superagent'
import { usersQuantity } from './constans/projectConstants';
import { userData, registrationData, randomUser, userName } from './constans/testData';
import { URL } from './constans/urls';

let response: superagent.Response;

describe('GET method tests', () => {
  test('Should get all users', async () => {
    try {
      response = await superagent.get(`${URL}/users/`)
    } catch (error: any) {
      throw new Error(error.message)
    }
    expect(response.status).toBe(200)
  })

  test('Should not get a single user', async () => {
    try {
      response = await superagent.get(`${URL}/users/${usersQuantity + 1}`)
    } catch (error: any) {
      expect(error.status).toBe(404)
    }
  })
})

describe('POST method tests', () => {
  test('Should create a new user', async () => {
    try {
      response = await superagent.post(`${URL}/users`)
        .set('Content-Type', 'application/json')
        .send(userData)
    } catch (error: any) {
      throw new Error(error.message)
    }
    expect(response.status).toBe(201)
    expect(response.body).toMatchObject(userData)
  })

  test('Should register the user unsuccesful', async () => {
    try {
      response = await superagent.post(`${URL}/register`)
        .set('Content-Type', 'application/json')
        .send(registrationData)
    } catch (error: any) {
      expect(error.status).toBe(400)
    }
  })
})

describe('DELETE method tests', () => {
  test('Should delete the user', async () => {
    try {
      response = await superagent.delete(`${URL}/users/${randomUser}`)
        .set('Content-Type', 'application/json')
    } catch (error: any) {
      throw new Error(error.message)
    }
    expect(response.status).toBe(204)
  })
})

describe('PUT method tests', () => {
  test('Should update the user name', async () => {
    try {
      response = await superagent.put(`${URL}/users/${randomUser}`)
        .set('Content-Type', 'application/json')
        .send(userName)
    } catch (error: any) {
      throw new Error(error.message)
    }
    expect(response.status).toBe(200)
    expect(response.body).toMatchObject((userName))
  })
})

describe('PATCH method tests', () => {
  test('Should update the user data', async () => {
    try {
      response = await superagent.patch(`${URL}/users/${randomUser}`)
        .set('Content-Type', 'application/json')
        .send(userData)
    } catch (error: any) {
      throw new Error(error.message)
    }

    expect(response.status).toBe(200)
    expect(response.body).toMatchObject(userData)
  })
})
