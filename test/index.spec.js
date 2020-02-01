// importamos la funcion que vamos a testear
import { emailLogin, createAccount } from '../src/lib/index.js';
import { googleLogin, getProfilePicUrl } from '../src/lib/google-auth.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();

mockfirestore.autoFlush();
mockauth.autoFlush();
const mockprovider = new firebasemock.MockFirebase();
mockprovider.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  path => (path ? mockfirestore.child(path) : null),
  () => mockauth,
  () => mockfirestore,
  () => mockprovider,
);

describe('emailLogin', () => {
  it('debería ser una función', () => {
    expect(typeof emailLogin).toBe('function');
  });

  it('Debería poder iniciar sesion', () => emailLogin('tami.skt@gmail.com', 'tami2020')
    .then((user) => {
      expect(user.email).toBe('tami.skt@gmail.com');
    }));
});

describe('createAccount', () => {
  it('debería ser una función', () => {
    expect(typeof createAccount).toBe('function');
  });

  it('deberia retornar un objeto', () => {
    expect(typeof createAccount()).toBe('object');
  });
});

describe('googleLogin', () => {
  it('debería ser una función', () => {
    expect(typeof googleLogin).toBe('function');
  });
});

describe('getProfilePicUrl', () => {
  it('debería ser una función', () => {
    expect(typeof getProfilePicUrl).toBe('function');
  });
});
