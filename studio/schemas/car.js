export default {
  name: 'car',
  type: 'document',
	title: 'Occasions (Auto\'s)',
  fields: [
    {
      name: 'merk',
      type: 'string',
      title: 'Merk'
    },
    {
      name: 'model',
      type: 'string',
      title: 'Model'
    },
    {
      name: 'prijs',
      type: 'number',
      title: 'Prijs'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Foto van de auto',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bouwjaar',
      type: 'number',
      title: 'Bouwjaar'
    },
    {
      name: 'kilometers',
      type: 'number',
      title: 'Kilometerstand'
    },
    {
      name: 'brandstof',
      type: 'string',
      title: 'Brandstof',
      options: {
        list: [
          {title: 'Benzine', value: 'benzine'},
          {title: 'Diesel', value: 'diesel'},
          {title: 'Hybride', value: 'hybride'},
          {title: 'Elektrisch', value: 'elektrisch'}
        ]
      }
    },
    {
      name: 'beschrijving',
      type: 'text',
      title: 'Extra Beschrijving'
    }
  ]
}
