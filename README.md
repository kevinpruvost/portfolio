# My Portfolio
A portfolio presenting my most important projects (WIP).

<p align="center">
  <img src="https://r2enc-static.totalwar.com/images/icons/factions/carthage/mon_256.png" width="100">
</p>

<p align="left">
  <a href="https://www.linkedin.com/in/kevin-pruvost-3766a4178/" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" width="40">
  </a>
  <a href="https://github.com/kevinpruvost" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" width="40">
  </a>
</p>

Keep in mind that this does not represent all of my technical knowledge, I've done internships and I don't show here what I learnt working in companies.<br/>
My resume/CV would be more appropriate if you want to know more about me.

Link to test the project / check the portfolio : [kevinpruvost.github.io/portfolio]

[kevinpruvost.github.io/portfolio]: https://kevinpruvost.github.io/portfolio

# Description

It contains a presentation of the projects I'm the most proud of, a brief description of my personnality, what I love to do and the values I believe in.

Made with ReactJS.

# Brief Tutorial on how to host a React portfolio on Github Pages

* Make a Github repository of your future portfolio.
* Clone it on your computer.
* `cd` into its parent directory (`cd $REPO_PATH/../`).
* Launch this command `npm init react-app $REPO_DIRECTORY_NAME`.
* `cd` in the repository.
* Launch this command `npm install gh-pages --save-dev`.
* Modify `package.json` by adding these elements:
  * `"homepage": "http://kevinpruvost.github.io/portfolio",` at the first line,
  * And adding these lines in `"scripts"`:
    * `"predeploy": "npm run build"`
    * `"deploy": "gh-pages -d build"`
  * So that it looks like this :

<img src="https://github.com/kevinpruvost/portfolio/blob/main/screenshots/Capture.PNG"/>

* Launch this command `npm run deploy`
* And then push the modifications to the repository.

You will have to repeat `npm run deploy` in order to publish your modifications.
