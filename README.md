# WEB102 Prework - *Crowd Funded Game Project*

Submitted by: **Segni Tulu**

**Crowd Funded Game Project** is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:

* [ ] The introduction section explains the background of the company and how many games remain unfunded.
* [ ] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [ ] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [ ] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:

* [ ] List anything else that you can get done to improve the app functionality!
    - [ ] I Updated the UI/UX

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='https://drive.google.com/file/d/15fM6RxgUYu-gmMrxGu4rLy10iTr4lYa3/view?usp=sharing' title='Video Walkthrough' width='' alt='Video Walkthrough' />

Video created with Mac Screen Recorder

## Notes

## Challenges that I have encountered, fixed and learned through the app. 

## - Data Parsing:
Challenge: Parsing JSON data correctly for use in the app.
Solution: Used JSON.parse() to convert the JSON data into an array of objects for easy access and manipulation.

## - Multiple Filters:
Challenge: Managing multiple filters without conflicts.
Solution: Created separate functions for each filter and cleared the existing content before rendering the new data.

## - Accurate Calculations:
Challenge: Updating statistics like total raised and contributions based on filtered data.
Solution: Used reduce() to calculate totals dynamically and toLocaleString() for proper number formatting.

## License

    Copyright [2024] [CodePath] and [Segni Tulu]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
