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

##### Example data on collection mongoodb for collection Product :

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
          "comment": "vidio ini bla bla bla"
        }
      ]
    }
  ]
}
```

### 2. List API request and response

#### GET /products

##### _METHOD GET_ Return all product in the system :

- URL Params : _None_.
- Data Params : _None_.
- Headers : Content-Type: application/json.
- Success Response :
  _CODE 200_.

*Result :*

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
          "comment": "vidio ini bla bla bla"
        }
      ]
    }
  ]
}
```

-Error Response :
_CODE_ 404

#### GET /products/:id

##### *METHOD GET by ID* Return specified product :

- URL Params : ```
id=[integer]```.
- Data Params : *None*.
- Headers : 
Content-Type: application/json
Authorization:Baerer ```
<QAuth Token>```.
- Success Response :
  _CODE 200_.

*Result :*