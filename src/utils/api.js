const URL = "https://api.oladavid.com/api";

const headers = {
  Accept: "application/json"
};

export const getUsers = () =>
  fetch(`${URL}/users/`, {
    method: "GET",
    headers
  }).then(response => response.json());

export const getUser = id =>
  fetch(`${URL}/users/${id}`, {
    method: "GET",
    headers
  }).then(response => response.json());

export const getProjects = () =>
  fetch(`${URL}/projects/`, {
    method: "GET",
    headers
  }).then(response => response.json());

export const getProject = id =>
  fetch(`${URL}/projects/${id}`, {
    method: "GET",
    headers
  }).then(response => response.json());

export const getAchievements = () =>
  fetch(`${URL}/achievements/`, {
    method: "GET",
    headers
  }).then(response => response.json());

export const getAchievement = id =>
  fetch(`${URL}/achievements/${id}`, {
    method: "GET",
    headers
  }).then(response => response.json());

export const contactForm = data =>
  fetch(`${URL}/contact/`, {
    method: "POST",
    headers: {
      ...headers,
      "content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .catch(response => response);
