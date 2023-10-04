# 欢迎来到极客 Web3

## 部署工作流

三个角色，代码贡献者，代码审核者，代码管理员，之间如何配合的工作流。

### 代码贡献者

1. 准备
    - fork `main` branch `new-site`, `git checkout -b new-site` 
    - checkout 到 branch `new-site` 
2. 编辑
    - 在branch `new-site` 里编辑文件
3. 在**docusaurus**里build & deploy
    - 进入 `docusaurus` 文件夹
    - 运行 `npm install` 安装所需的packages
    - `npm run start`，来实时查看改动后的网页效果
    - `npm run build`, 产生更新的 `build` 文件夹
    - `npm run serve` to test the build locally at http://localhost:3000/
    - 确保测试网站在localhost上运行无误
4. Git
    - 新的代码测试无误后，往上一级回到`dfx`的根目录
    - 在branch `new-site`里，`git add .`
    - `git commit -m "commit message"`
    - `git push --set-upstream origin new-site`
5. Submit PR
    - 创建一个 [pull request](https://github.com/ic123-xyz/ic123/pulls) 

### 代码审核者

6. 审核
    - `git pull` 来更新本地的仓库
    - `git checkout new-site` 切换到新的branch
    - 在`docusaurus`文件夹下，运行 `npm run build`， 测试branch `new-site` 的新代码
    - 在Github repo相应的PR下留言

### 代码管理员

7.  批准
    - 根据审核的情况，如果对代码满意，approve merge request，把 `new-site` merged进入 `main`
    - Github将自动从remote上删掉 `new-site`这个branch

8.  部署
    - 在本地，`git checkout main` 切换回到 `main`
    - `git pull` 更新merged了`new-site` branch的 `main`
    - 在 `docusaurus` 目录里，运行 `yarn build`，生成新的output文件
    - 确保测试网站在`localhost:3000` 运行无误
    - 往上一级回到 `dfx` 根目录，确保仍然在`main` branch里
    - 另开一个Terminal窗口，`dfx start`
    - 在原来的窗口，`dfx deploy`，将网站的文件部署在本地的canister上
    - 在浏览器里查看网站的部署是否有错误，http://canister-id-on-local-machine.localhost:4943/ (不同电脑在本地产生的canister id不一样)
    - 确保测试网站在`localhost:4943` 运行无误
    - `dfx deploy --network=ic --no-wallet`, 部署文件到IC上的容器
