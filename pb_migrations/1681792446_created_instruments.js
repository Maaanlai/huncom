migrate((db) => {
  const collection = new Collection({
    "id": "0ywgl3n3exu555f",
    "created": "2023-04-18 04:34:06.418Z",
    "updated": "2023-04-18 04:34:06.418Z",
    "name": "instruments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sm4c9x76",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "1imdzktk",
        "name": "picture",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0ywgl3n3exu555f");

  return dao.deleteCollection(collection);
})
