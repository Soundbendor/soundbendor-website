# NextJS Readme

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Developers Notes

### \_\_base Model Briefly

A problem exists for developers that the model layer is often repeating rote code unnecessarily.  This can be frustrating for developers.
Accordingly, we have abstracted out the basics of the model layer to the \_\_base model


### Implementing the \_\_base model
To implement the \_\_base model, first create a new file for the type of service you wish to make.  Include the BaseService at the top of the new file.  You can optionally create a custom object which your data can be stored within, if you wish.  For the most simple implementations, should look like:
```javascript
import BaseService from './__base'
const ExampleService = BaseService.constructDefaultService(databaseIdentifer, singularName[, pluralName[, customObject[, filterFunctions]]])
module.exports = ExampleService
```

A few examples include:
```javascript
import BaseService from './__base'
const EventService = BaseService.constructDefaultService('api::event.event', 'event')
module.exports = EventService
```

```javascript
import BaseService from './__base'
const CategoryService = BaseService.constructDefaultService('api::category.category', 'category', 'categories')
module.exports = CategoryService
```

```javascript
import BaseService from './__base'
import ImageService from './images'

function Person (rawData) {
  let p = {}
  p = Object.assign(p, rawData)
  p.RawData = rawData
  p.photoImage = ImageService.getImage({ id__eq: p.Photo })
  return p
}

const PersonService = BaseService.constructDefaultService('api::person.person', 'person', 'people', Person)

module.exports = PersonService
```

Or you can manually build your service while still accessing the underlying necessary functions for a service and including additional functions:
```javascript
import BaseService from './__base'

// Constructor -- decorates the data
function Project (rawData) {
  let p = {}
  p = Object.assign(p, rawData)
  p.RawData = rawData
  const myDate = new Date(p.InitialPublishedDate)
  p.formattedInitialPublishedDate = (myDate.getMonth() + 1) + '/' + myDate.getDate() + '/' + myDate.getFullYear()
  return p
}

const ProjectService = {
  getRawProjects: BaseService.getRawData('api::project.project'),
  getRawProject: function (kwargs) {
    return BaseService.getRawDatum(ProjectService.getRawProjects, kwargs)
  },
  getProject: function (kwargs) {
    return BaseService.getDatum(ProjectService.getRawProject, Project, kwargs)
  },
  getProjects: function (kwargs) {
    return BaseService.getData(ProjectService.getRawProjects, Project, kwargs)
  },
  // Custom function to get the total number of years for a project
  getProjectYears: function (kwargs) {
    const projects = this.getRawProjects(kwargs)
    const years = projects.map(project => (new Date(project.InitialPublishedDate)).getFullYear())
    return years.filter((item, index, arrRef) => arrRef.indexOf(item) === index)
  }
}

module.exports = ProjectService
```

### Using functions from services that use the \_\_base model
Here's the benefits of having this \_\_base model: things will just work consistently.

#### Example 1: Get one object based on ID being equal to a certain value
For example, lets say you want to get an event from an EventService that uses the \_\_base model.

```javascript
import BaseService from './__base'
const EventService = BaseService.constructDefaultService('api::event.event', 'event')
module.exports = EventService
```

Now lets say you want to get ONE SPECIFIC EVENT and you happen to know it's ID is 15.  In a controller (the /pages section), you could call:

```javascript
import EventService from '../models/events'
...
const events = EventService.getEvent({'Id__eq': 15})
...
````
and you will receive exactly 1 event that is ID == 15

#### Example 2: Get many objects based on published date occurring after a certain value
Lets say you want to get ALL EVENTS (plural) that were published after a certain date, you could do the following:

```javascript
import EventService from '../models/events'
...
const events = EventService.getEvents({'PublishedDate__gt': '2020-05-27'})
...
````
and the get an array of events that meet that criteria

### Filter Functions
By default the \_\_base model supports the following filtering:

- Equals:               {property_name}\_\_eq     -- whether any content is equal to the searching term
- Less Than:            {property_name}\_\_lt     -- whether any content is less than the searching term
- Less Than Eq. To:     {property_name}\_\_lte    -- whether any content is less than or equal to the searching term
- Greater Than:         {property_name}\_\_gt     -- whether any content is greater than the searching term
- Greater Than Eq. To:  {property_name}\_\_gte    -- whether any content is greater than or equal to the searching term
- Like:                 {property_name}\_\_like   -- whether any content contains the substring or number searched
- Starts With:          {property_name}\_\_sw     -- whether any content starts with the searching term
- Ends With:            {property_name}\_\_ew     -- whether any content ends with the searching term

The filter functions can be extended for each service if necessary.  For Example:

```javascript
...
var projectFilterFunctions = Object.assign({}, BaseService.filterFunctions) // this extends the base filter functions
projectFilterFunctions.searchNameAndDescription = (key, value, obj) => obj.Name.includes(value) || obj.Description.includes(value)

const ProjectService = {
  getRawProjects: BaseService.getRawData('api::project.project', projectFilterFunctions), //this sets the project specific filter functions
  ...
}
```

This could then be implemented using:

```javascript
  import ProjectService from '../models/projects'
  ...
  var filters = {}
  filters['x__searchNameAndDescription'] = searchField.value
  ProjectService.getProjects(filters)
```


### Sorting
In addition to filtering, we have included a pre-filter sort and a post-filter sort.  To use those, you can include the keywords "presortBy", "presortDirection", "postsortBy", and "postsortDirection" accordingly (see examples).

Example: Lets say you want to get ALL EVENTS (plural) that were published after a certain date, sorted by published date ascending, you could do the following:

```javascript
import EventService from '../models/events'
...
const events = EventService.getEvents({'PublishedDate__gt': '2020-05-27', 'postsortBy':'PublishedDate'}) // asc is default
...
````

Lets say you want to get ALL EVENTS (plural) that were published after a certain date, sorted by published date descending, you could do the following:
```javascript
import EventService from '../models/events'
...
const events = EventService.getEvents({'PublishedDate__gt': '2020-05-27', 'postsortBy':'PublishedDate', 'postsortDirection': -1})
...
````

We understand that there may be efficiencies to sorting at different times, so presort filtering and postsort filtering are both available.

### Pagination (Limiting the number of records)
In addition to filtering and sorting, we have included the ability to limit the number of records shown.  We use keywords "page" and "pageSize" to make this happen.

Example:
```javascript
import EventService from '../models/events'
...
const events = EventService.getEvents({'pageSize':2}) // will default page value to 1
...
````
this will limit the results to TWO results because page size is 2.

Example:
```javascript
import EventService from '../models/events'
...
const events = EventService.getEvents({'postsortBy':'PublishedDate', 'postsortDirection': -1, 'pageSize':3, 'page': 2}) // will default page value to 1
...
````
Assume that there were 10 events [A, B, C, D, E, F, G, H, I, J].  The post sort would order the data by PublishedDate in a descending manner.  
Lets assume that the data is now sorted as [H, I, B, D, E, A, C, G, F, J] as a result of the postsort.  
Then the pagination would limit the results to exactly 3 results corresponding to the second set of 3 results, which would yield [D, E, A].  
Had the 'page' value been 3, it would have resulted in [C,G,F].  
Had the 'page' value been 4, it would have resulted in [J].  
Had the 'page' value been 5, it would have resulted in [], because there are not enough records to have a 5th page.  

