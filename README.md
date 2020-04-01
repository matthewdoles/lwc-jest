## Jest & Lightning Web Components

This work was put together as a part of a presentation to the Johnson & Johnson Salesforce engineering and leadership team on April 1st, 2020 to demo the current landscape of testing involved with a typical Salesforce project. Presentations were given on Apex testing and Robot framweork test automation, but my section (this work) was focused on using Jest to test frontend Lightning Web Components.

Seeing as it was a presentation on Jest testing LWC, it seemed fit to present the topic with LWC. You can view this presentation at the following link: [https://lwc-jest-developer-edition.na111.force.com/s/](https://lwc-jest-developer-edition.na111.force.com/s/)

Although most of the information you will find on the site will be shortened bulleted points which I expanded on during the presentation itself - the core concepts are there, and you can interact with the Addition component which was demoed as an example.

Additionally, feel free to pull down this code and push to your own scratch org using the following steps:

1. These steps are given operating under the persumption that you already have a Dev Hub setup and enabled which you can create scratch orgs off of. If not, I'd recommend giving this Trailhead a look: [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/)

1. Clone the lwc-jest repository:

    ```
    git clone https://github.com/matthewdoles/lwc-jest
    cd lwc-jest
    ```

1. Create a scratch org and provide it with an alias (**lwc-jest-scratch** in the command below, can name however):

    ```
    sfdx force:org:create -s -f config/project-scratch-def.json -a lwc-jest-scratch
    ```

1. Push the app to your scratch org:

    ```
    sfdx force:source:push
    ```

1. Assign the **LWC_Jest** permission set to the default user:

    ```
    sfdx force:user:permset:assign -n LWC_Jest
    ```

1. Open the scratch org:

    ```
    sfdx force:org:open
    ```

1. In App Launcher, click **View All** then select the **LWC Jest** app.
