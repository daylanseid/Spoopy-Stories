# Spoopy-Stories
This website is a collection of creepy/scary stories from around the world. With this site, users can make a collection of their favorite creepy/scary stories or create their own! Users will also be able to leave reviews on various stories.

<img width="1436" alt="screen shot 2018-09-15 at 10 08 09 pm" src="https://user-images.githubusercontent.com/39752800/45592147-def6ff80-b933-11e8-9ad3-b53b8129d9c4.png">

## Motivation
I wanted a resource to share and show snippets of horror/scary stories. I thought this would be a cool project to work considering the fact I really love horror/scary stories and it would be a nice resource to get a bunch of different stories from all over in one place. 


## General Approach
For this project, I decided that starting out with a basic ERD would be the easiest way to approach it. After drawing out an ERD and stating the relationships between the two tables, I broke the app into two components: An app directory with files to control the back-end and a client directory with files to control the front end. For the backend, I set up a seed file and schema file using rails, where I hard-coded data and used Ffaker  to build the database for testing.

For the client side, which will be the front-end I used create-react-app to create the app.

After creating both a functional front-end and back-end, I used CSS and Bulma to style and format the app.


## App Link
http://spoopy_stories.surge.sh/


## MVP
1. CRUD functionality for Stories


## ICE-Box

1. User/Authentication
1. Favorites/My Collection (many to many)
1. Randomly generated stories on main page
1. CRUD functionality for Reviews




## Code Example
```react

 determineWhichToRender() {
    const { currentView } = this.state;
    const { stories, selectedStory, selectStory } = this.state;

    switch (currentView) {
      case 'Story Index':
        return <StoryIndex
         stories={this.state.stories}
         detail = {this.getAStory}
         onSubmit = {this.fetchAllStories}
         view={this.fetchAllComments}
         />;
        break;
        case 'Create Story':
        return <CreateStory 
        onSubmit={this.createStory}
        />;
        break;
        case 'Edit Story':
        const story = stories.find(story => story.id === selectedStory.story_id);
        return <EditStory
        onSubmit={this.updateStory}
        story = {story}
        story={this.state.selectedStory}
         />;
         break;
         case 'Story Detail':
         return <StoryDetails
         onClick={this.selectStory}
         story={this.state.selectedStory}
         edit= {this.getAStory}
         delete ={this.deleteStory}
         />;
         break;
         case 'Home Page':
         return <HomePage 
         />;

    }
  }

  handleLinkClick(link) {
    this.setState({currentView: link});
  }


  render() {
    const links = [
      'Story Index',
      'Edit Story',
      'Create Story',
    ];


    return (
      <div>
     <Header 
     onClick ={this.handleLinkClick.bind(this)} 
     links={links}/>
     {this.determineWhichToRender()}
     <Footer />
      </div>
    );
  }
}

```


## Appshots & Wireframes
<img width="1418" alt="screen shot 2018-09-15 at 10 06 00 pm" src="https://user-images.githubusercontent.com/39752800/45592144-bf5fd700-b933-11e8-998f-601a6f294d8d.png">
![horror stories](https://user-images.githubusercontent.com/39752800/45036237-fd065b00-b029-11e8-878c-6ec969eae174.png)
<img width="450" alt="screen shot 2018-09-04 at 9 52 43 am" src="https://user-images.githubusercontent.com/39752800/45036241-00014b80-b02a-11e8-9dc5-c5fb41a87707.png">
<img width="457" alt="screen shot 2018-09-04 at 9 52 25 am" src="https://user-images.githubusercontent.com/39752800/45036245-01cb0f00-b02a-11e8-8ebc-a52e9870ce73.png">
<img width="452" alt="screen shot 2018-09-04 at 9 52 33 am" src="https://user-images.githubusercontent.com/39752800/45036254-055e9600-b02a-11e8-9c32-411d8cc4d55e.png">
<img width="1435" alt="screen shot 2018-09-15 at 10 12 47 pm" src="https://user-images.githubusercontent.com/39752800/45592182-896f2280-b934-11e8-8c13-07dc904d4111.png">
<img width="1438" alt="screen shot 2018-09-15 at 10 13 54 pm" src="https://user-images.githubusercontent.com/39752800/45592188-af94c280-b934-11e8-87e2-0681dd680e1c.png">


More can be found in the Wireframes folder.


## User Stories
1. As an avid lover of horror stories, I would love a website where I could read a collection of them.
1. As a person who is interested in the scary stories of other countries, I would love to be able to go to a site where I can read them.
1. As a user, I want to save a collection of horror stories that I enjoyed.
1. If I enjoyed a horror story I read, I would like to leave a review on the story.



## Built with

* Visual Studio Code
* Heroku
* React
* React-dom
* React-scripts
* Cors
* Nodemon
* Bulma
* Balsamiq
* CSS-Grid
* Ruby
* Rails
* FFaker
 

## How to Use:
To test it out yourself, feel free to fork and clone this repo.

## Unsolved Problems:
1. Rendering comments along with the stories.
1. Getting CRUD for comments


## Things to be added later:
1. User Authentication
1. Thumbs up and down for reviews
1. Delete and edit reviews with user authentication



## Credits


### For CSS Styling
1. https://codepen.io/Laumak/pen/pRJzGL
1. https://codepen.io/shadeed/pen/JbjeKx
1. https://codemyui.com/tag/button/page/2/
1. https://codepen.io/AllThingsSmitty/pen/VzXrgY
1. https://codepen.io/chris22smith/pen/YZPrjr
1. https://codepen.io/giana/pen/xdXpJB


### Idea for Horror Stories
* https://www.creepypasta.com/submit-your-pasta/

### Design of the wireframes
* https://balsamiq.cloud/

### CSS 
* https://css-grid.coffeecup.com/css-grid-builder.html
* Bulma




## License

GA © Ashley Thompson
