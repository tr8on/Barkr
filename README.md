# P3-Barkr : Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1: Friday, June 14| Project Description / Wireframes / Priority Matrix / Functional Components | Complete
|Day 2: Monday, June 17| Database and Tables / Render Data  | Complete
|Day 3: Tuesday, June 18| Render Data onto Each Component | Complete
|Day 4: Wednesday, June 19| Create a functional Homepage / Styling | Complete
|Day 5: Thursday, June 20| Post MVP  | Incomplete
|Day 6: Friday June 21| Present | Incomplete

## Project Description

We are going to creat an app called 'Barkr'. It is a doggy dating app!

## Wireframes
![img_2040](https://media.git.generalassemb.ly/user/20229/files/56360b80-90df-11e9-9792-8f7fa8539f11)
![screen shot 2019-06-15 at 4 20 44 pm](https://media.git.generalassemb.ly/user/20229/files/5fbf7380-90df-11e9-9591-47edd8074405)
![screen shot 2019-06-15 at 4 23 11 pm](https://media.git.generalassemb.ly/user/20229/files/61893700-90df-11e9-94fe-17faf34599d7)
![screen shot 2019-06-15 at 4 15 30 pm](https://media.git.generalassemb.ly/user/20229/files/63eb9100-90df-11e9-96bb-ea552f5cedd0)
![screen shot 2019-06-15 at 4 16 10 pm](https://media.git.generalassemb.ly/user/20229/files/64842780-90df-11e9-879e-de836ee61ca5)

## Priority Matrix

https://res.cloudinary.com/rubenvelez23/image/upload/a_-90/v1560775882/IMG_20190617_003050_1_pwgitw.jpg

## React Architectural Design

https://res.cloudinary.com/rubenvelez23/image/upload/v1560782391/IMG_20190617_103605_e5u37k.jpg

## ERD

https://res.cloudinary.com/rubenvelez23/image/upload/v1560739947/IMG_5232_xgyvn8.png

## Functional Components

#### Components
| Component | Description | 
| --- | :---: |  
| Home page | This will render the home page | 
| Doggy list | This will render a list of doggys in the area | 
| Doggy profile | This will render an individual doggy's profile with info | 
| Owner profile  | This will render the doggy owner's profile with contact info | 
| Doggy form | This will include the CRUD for a doggy profile | 
| About page | This will include info about the app and its creators | 

#### Timeframe
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Setup Project3 Repo/Folders/Files | H | 1hrs| 2hrs |
| Creation of Owner and Dog Tables | H | 5hrs| 5hrs |
| Test CRUD using Postman | H | 1hrs| 30min |
| Debug backend | H | 2hrs| 1hr |
| Functional Home page | H | 5hrs| 8hrs |
| Doggy list | H | 5hrs| 12hrs |
| Doggy profile | H | 5hrs| 6hrs |
| Owner profile | H | 5hrs| ??? |
| About page | H | 5hrs| 3hrs |
| Extra Styling | H | 3hrs| 2hrs  |
| Total | H | 48hrs| 39.50hrs | 

#### MVP:
- Backend Routes !COMPLETED!
- Database with two tables (dogs and owners) !COMPLETED!
- HomePage !COMPLETED!
- DogList !COMPLETED!
- Dog Profile !COMPLETED!
- Register Dog !COMPLETED!
- Update Dog !COMPLETED!
- Delete Dog !COMPLETED!
- Good Design

#### PostMVP:
- Authorization
- Owner Profiles
- CRUD functionalities similar to dog profiles for owners
- Owner Contact Information Link
- Exceptional Design

------------------------------------------------------

## Helper Functions

...

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### Dog API

we found an API that required no key with unlimited calling.

    async componentDidMount(){
        const apiRes = await axios.get(`https://dog.ceo/api/breed/${this.props.breed.toLowerCase()}/images/random`)
                const dogPic = apiRes.data.message
                console.log(dogPic)
                this.setState({
                    dogPic:dogPic
                }) 
    };

## Change Log 

#### Zipcode Filter
| Original Plan | Outcome | 
| --- | :---: |  
| Filter dogs by gender && zipcode | We left out the zipcode filter because we really wanted to focus on perfecting other more important functionalities and CSS.  | 

## Issues and Resolutions 

#### Making Something Clickable
**ERROR**: We were trying to make our entire 'dog box' clickable and have the dog name not look like a link.                               
**RESOLUTION**: We were wrapping the code with Link and onClick. Removing onClick fixed our problem and inserting textDecoration fixed our problem. Correct code -> 
````
<Link style={{ textDecoration: 'none' }} key={dog.id} to={`/dog/${dog.id}`}>
````
