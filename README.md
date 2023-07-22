## This mid term project from GIGIH 3.0 Fullstack Developer

### About this project :

this project about tokopedia play clone, this is mid term from GIGIH 3.0
in this project build with MERN is
('mongoodb, express, reactJs and NodeJS').

##### *NOTED* : to download the latest version of npm, on the command line, run the following command:

```bash
npm install -g npm
```

##### *NOTED* : to install this project depedencies, run the following command:

```bash
npm install
```

### 1. Database Structure :

##### *NOTED* : to create **Database** in MONGOSH with name database is : tokpedPlayClone 

```bash
    use tokpedPlayClone
```

##### and create **Collection** : Products

```bash
    db.createCollection("Products")
```

##### Example data on collection mongoodb :

```json
{
  "Product": [
    {
      "idProduct": 1,
      "title": "abc",
      "price": 7,
      "urlVidioList": [
        {
          "thumbnailPhotos": "https://",
          "urlVidio": "https://"
        }
      ],
      "comments": [
        {
          "username": "user 1",
          "comment": "vidio sampah bla bla bla"
        }
      ]
    }
  ]
}
```

### 2. List API request and response