$(document).ready(function () {
  const endpoint = `https://api.github.com/users/Belfegorrr`;

  $.ajax(endpoint).then(async function getApiGitHub(resposta) {
    try {
      const response = await fetch("https://api.github.com/users/Belfegorrr");

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();

      const avatar = document.querySelector(".profile_avatar");
      const info = document.querySelector(".numbers");

      const infos = result.public_repos;
      const infoSeguidores = result.followers;
      const infoSeguindo = result.following;

      avatar.innerHTML = `<img id="avatar-img" class="profile-avatar" src="${result.avatar_url}" alt="Avatar">`;
      info.innerHTML = `<li class="numbers-item"><h4>Repositórios</h4>${infos}</li><li class="numbers-item"><h4>Seguidores</h4>${infoSeguidores}</li><li class="numbers-item"><h4>Seguindo</h4>${infoSeguindo}</li>`;
    } catch (err) {
      console.log(err);
    }
  });
});

// function getApiGitHub() {
//   fetch("https://api.github.com/users/Belfegorrr")
//     .then(async (res) => {
//       if (!res.ok) {
//         throw new Error(res.status);
//       }
//       const data = await res.json();

//       const infos = data.public_repos;
//       const infoSeguidores = data.followers;
//       const infoSeguindo = data.following;

//       const avatar = document.querySelector(".profile_avatar");
//       const info = document.querySelector(".numbers");
//       avatar.innerHTML = `<img id="avatar-img" class="profile-avatar" src="${data.avatar_url}" alt="Avatar">`;
//       info.innerHTML = `<li class="numbers-item"><h4>Repositórios</h4>${infos}</li><li class="numbers-item"><h4>Seguidores</h4>${infoSeguidores}</li><li class="numbers-item"><h4>Seguindo</h4>${infoSeguindo}</li>`;
//     })
//     .catch((e) => console.log(e));
// }

// getApiGitHub();
