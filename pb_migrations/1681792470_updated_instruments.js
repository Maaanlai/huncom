migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ywgl3n3exu555f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nblv22f3",
    "name": "nameMongolian",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ywgl3n3exu555f")

  // remove
  collection.schema.removeField("nblv22f3")

  return dao.saveCollection(collection)
})
