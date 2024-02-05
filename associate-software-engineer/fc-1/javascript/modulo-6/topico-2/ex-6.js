const userName = "adrianopratesr";

const makeApiGithubrUrl = (userName) => {
  return `https://api.github.com/users/${userName}/repos`;
};

const URL_OPEN_API_GITHUB = makeApiGithubrUrl(userName);

const main = async () => {
  try {
    const getDataUserGithub = await fetch(URL_OPEN_API_GITHUB);
    const response = await getDataUserGithub.json();
    const displayRepos = response.forEach((repo) => console.log(repo.name));
    console.log(displayRepos);
  } catch (err) {
    console.error("Error:", err);
  }
};

main();
