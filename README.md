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

##### _NOTED_ : How run the project, run the following command:

```bash
npm start / npm run start
```

### 1. Database Structure :

database have **3 collection** it's videos, product, comments :
product and comments have vidioId from vidios : videoId

##### _NOTED_ : to create **Database** in MONGOSH with name database is : tokpedPlayClone

```bash
    use tokpedPlayClone
```

##### and create **Collection** with Mongosh or MongoShell: **Products**

```bash
    db.createCollection("products")
```

##### and create **Collection** with Mongosh or MongoShell: **Videos**

```bash
    db.createCollection("videos")
```

##### and create **Collection** with Mongosh or MongoShell: **Comments**

```bash
    db.createCollection("comments")
```

##### Example data on collection mongoodb for collection :

#### Videos :

```json
[
  {
    "titleVideo": "MITO Mesin Cuci Portable WM-1",
    "urlImageThumbnail": "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/5/30/a857ff86-41c6-427b-9323-ea1fff6bce2f.jpg",
    "videoLink": "https://youtu.be/g6wYuztTw2c",
    "videoId": "e358ba51-ecd5-4305-8fcc-25bf46bc4830"
  }
]
```

#### Product :

```json
[
  {
    "productId": "8c16dd59-0c13-4854-a4a1-23f3b06a90fa",
    "videoId": "e358ba51-ecd5-4305-8fcc-25bf46bc4830",
    "linkProduct": "https://www.tokopedia.com/bhinnekaha/mito-mesin-cuci-portable-wm-1?extParam=ivf%3Dfalse%26src%3Dsearch",
    "title": "Mesin Cuci Portabel MITO",
    "price": 583000
  }
]
```

#### Comments :

```json
[
  {
    "videoId": "e358ba51-ecd5-4305-8fcc-25bf46bc4830",
    "username": "Ferry",
    "comment": "wah barangnya sangat keren"
  }
]
```

### 2. List API request and response

#### GET /videos

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
    "ProductID": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    "LinkProduct": "https://example.com/product1",
    "Title": "Product 1",
    "Price": 12000
  }
]
```

- Error Response :
  _CODE_ 404

#### GET /videos/:id

##### \_METHOD GET by VideosID Return specified Videos :

- URL Params : `
VidioID=[integer]`.
- Data Params : _None_.
- Headers :
  Content-Type: application/json
  Authorization:Baerer `
<QAuth Token>`.
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

#### POST /comments/:id
