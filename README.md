
<h1 align="center">Training Certificate Generation, Distribution, and Value Transfer with Algorand NFTs and Smart-Contracts</h1>
<div>
<a href="https://github.com/degagawolde/smart-contracts-for-educational-certificates"><img src="https://img.shields.io/github/forks/degagawolde/smart-contracts-for-educational-certificates" alt="Forks Badge"/></a>
<a "https://github.com/degagawolde/smart-contracts-for-educational-certificates/pulls"><img src="https://img.shields.io/github/issues-pr/degagawolde/smart-contracts-for-educational-certificates" alt="Pull Requests Badge"/></a>
<a href="https://github.com/degagawolde/smart-contracts-for-educational-certificates/issues"><img src="https://img.shields.io/github/issues/degagawolde/smart-contracts-for-educational-certificates" alt="Issues Badge"/></a>
<a href="https://github.com/degagawolde/smart-contracts-for-educational-certificates/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/degagawolde/smart-contracts-for-educational-certificates?color=2b9348"></a>
<a href="https://github.com/degagawolde/smart-contracts-for-educational-certificates/blob/main/LICENCE"><img src="https://img.shields.io/github/license/degagawolde/smart-contracts-for-educational-certificates?color=2b9348" alt="License Badge"/></a>
</div>
</br>

# smart-contracts-for-educational-certificates
A client would like to solve the challenge of ensuring that certificates are available to all trainees in a secure way, and (if possible) that certificate holders can benefit from smart contract actions now and in the future.  At present, certificates are distributed as simple PDF files, without the ability to verify their authenticity nor can 10 Academy undertake smart actions with the trainees/their contracts.

# Objective
The client has partnered with Algorand to use the Algorand Blockchain as the foundational element of the NFT, and this must now be implemented.  In this project I will build end-to-end Web3 dapps on the Algorand Blockchain that will help the client generate and distribute Non-Fungible Tokens (NFTs) as certificates that will represent the successful completion of a weekly challenge to trainees, and allow trainees with NFTs to interact with a smart contract to perform pre-defined actions.  



## Repository Structure
```bash
????????? backend
???   ????????? config.py
???   ????????? models.py
???   ????????? routes.py
???   ????????? README.md
???   ????????? requirements.txt
???   ????????? run_app.sh
???   ????????? wsgi.py
????????? frontend
???   ????????? package.json
???   ????????? package-lock.json
???   ????????? public
???   ????????? README.md
???   ????????? src
????????? LICENSE
????????? README.md
```

## Installation Instructions

1. Clone the repo
   ```bash
   git clone https://github.com/degagawolde/smart-contracts-for-educational-certificates.git
   ```
2. Move into the backend folder and run the following lines in your terminal
   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   chmod +x ./setup.sh
   ./setup
   ```
3. For the frontend, move into the frontend directory and then install all the dependecies using the following line.
    ```bash
    npm install
    ```
4. Run the react app using
    ```bash
    npm start
    ```
5. Deployed [App](https://degagawolde.github.io/smart-contracts-for-educational-certificates/)
