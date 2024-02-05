const userName = "luanarahal";

const makeApiGithubrUrl = (userName) => {
  return `https://api.github.com/users/${userName}/repos`;
};

const URL_OPEN_API_GITHUB = makeApiGithubrUrl(userName);

const main = async () => {
  try {
    const getDataUserGithub = await fetch(URL_OPEN_API_GITHUB);
    const response = await getDataUserGithub.json();
    response.forEach((repo) => console.log(repo.name));
  } catch (err) {
    console.error("Error:", err);
  }
};

main();
