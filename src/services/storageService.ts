export function setSession(session: any) {
  localStorage.setItem("x-access-token", session.accessToken);
  localStorage.setItem("x-refresh-token", session.refreshToken);
  localStorage.setItem("_id", session._id);
  localStorage.setItem("email", session.email);
  localStorage.setItem("loggedIn", 'true');
}

export function removeSession() {
  localStorage.removeItem("x-access-token");
  localStorage.removeItem("x-refresh-token");
  localStorage.removeItem("_id");
  localStorage.removeItem("loggedIn");
}

export function setTokens(tokens: { accessToken: string; refreshToken: string; }) {
  localStorage.setItem("x-access-token", tokens.accessToken);
  localStorage.setItem("x-refresh-token", tokens.refreshToken);
}
