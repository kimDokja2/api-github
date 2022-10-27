const myUrl = "https://api.github.com/users/kimDokja2";

async function loadUser(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    renderUser(data);
  } catch (error) {
    console.log("error", error);
  }
}
function renderUser(data) {
  const fecha = data.created_at.slice(0, -10);
  const fechaFormato = new Date(fecha);
  const opciones = { month: "long", year: "numeric", day: "numeric" };
  const fechaCreada = fechaFormato.toLocaleDateString("en-US", opciones);
  document.getElementById("container").innerHTML = `
        <!-- Imagen de perfil -->
        <div class="image-container" id="imagen">
          <img
            width="100"
            src="${data.avatar_url}"
            alt=""
          />
        </div>
        <!-- Description del perfil -->
        <div class="description-container">
          <!-- Nombre de usuario y año de union -->
          <div class="user-date-container">
            <h2 id="name">${data.name}</h2>
            <p id="created-at">Joined ${fechaCreada}</p>
          </div>
          <!-- Nombre de usuario y la bio -->
          <div class="user-bio-container">
            <p id="login">@${data.login}</p>
            <p id="bio">${data.bio}</p>
          </div>
          <!-- Card con los repos, followes, following -->
          <div class="card-information">
            <div>
              <h5>Repos</h5>
              <h2 id="public_repos">${data.public_repos}</h2>
            </div>
            <div>
              <h5>Followers</h5>
              <h2 id="followers">${data.followers}</h2>
            </div>
            <div>
              <h5>Following</h5>
              <h2 id="following">${data.following}</h2>
            </div>
          </div>
          <!-- Info de ubi, twitter, link, username -->
          <div class="info-container">
            <div>
              <p id="location">
                <img width="15" src="./images/pin.png" alt="" />&nbsp; ${data.location}
              </p>
              <p id="blog">
                <img width="15" src="./images/link.png" alt="" />&nbsp; ${data.blog}
              </p>
            </div>
            <div>
              <p id="twitter_username">
                <img width="15" src="./images/twitter.png" alt="" />&nbsp; ${data.twitter_username}
              </p>

              <p id="company">
                <img width="15" src="./images/hotel.png" alt="" />&nbsp; ${data.company}
              </p>
            </div>
          </div>
        </div>
    `;
}

document.getElementById("btn-search").addEventListener("click", (e) => {
  let user = document.getElementById("usergithub").value;
  let url = "https://api.github.com/users/" + user;
  loadUser(url);
});

loadUser(myUrl);
