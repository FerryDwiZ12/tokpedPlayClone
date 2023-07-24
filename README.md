## This mid term project from GIGIH 3.0 Fullstack Developer

### About this project :

this project about tokopedia play clone, this is mid term from GIGIH 3.0
in this project build with MERN is
('mongoodb, express, reactJs and NodeJS').

##### _NOTED_ : to download the latest version of npm, on the command line, run the following command:

```bash
npm install -g npm
```

##### _NOTED_ : to install this project depedencies, run the following command:

```bash
npm install
```

### 1. Database Structure :

##### _NOTED_ : to create **Database** in MONGOSH with name database is : tokpedPlayClone

```bash
    use tokpedPlayClone
```

##### and create **Collection** : Products

```bash
    db.createCollection("Products")
```

##### Example data on collection mongoodb for collection :

#### Videos :

```json
[
  {
    "VidioID": "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
    "UrlImageThumbnail": "https://example.com/thumbnail1.jpg",
    "VidioLink": "https://example.com/video1.mp4"
  }
]
```

#### Product :

```json
[
  {
    "VidioID": "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
    "ProductID": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    "LinkProduct": "https://example.com/product1",
    "Title": "Product 1",
    "Price": 12000
  }
]
```

#### Comments :

```json
[
  {
    "VidioID": "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
    "username": "user1",
    "comment": "Great video!"
  }
]
```

### 2. List API request and response

#### GET /products

##### _METHOD GET_ Return all Videos in the system :

- URL Params : _None_.
- Data Params : _None_.
- Headers : Content-Type: application/json.
- Success Response :
  _CODE 200_.

_Result :_

```json
[
  {
    "VidioID": "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
    "UrlImageThumbnail": "https://example.com/thumbnail1.jpg",
    "VidioLink": "https://example.com/video1.mp4"
  }
]
```

-Error Response :
_CODE_ 404

#### GET /products/:id

##### _METHOD GET by ID_ Return specified product :

- URL Params : `
id=[integer]`.
- Data Params : _None_.
- Headers :
  Content-Type: application/json
  Authorization:Baerer `
<QAuth Token>`.
- Success Response :
  _CODE 200_.

_Result :_
