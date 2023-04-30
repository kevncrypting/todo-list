'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TodoItems', [
      {
        name: "Clean the kitchen",
        description: "Wash the dishes, wipe the counters, and sweep the floor",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Do laundry",
        description: "Wash, dry, and fold clothes",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Organize closet",
        description: "Sort clothes, donate unwanted items, and put everything in its place",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Finish essay",
        description: "Write a 1000-word essay on the effects of climate change",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Study for math exam",
        description: "Review chapters 1-5 and complete practice problems",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Attend online lecture",
        description: "Watch the recorded lecture for biology class and take notes",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Send progress report",
        description: "Compile a report on the team's progress for the past month and send it to the manager",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Schedule meeting",
        description: "Arrange a meeting with the client to discuss project updates",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Review code",
        description: "Check and test the code submitted by the junior developer",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Vacuum the living room",
        description: "Vacuum the carpet and remove any visible debris",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Clean bathroom",
        description: "Clean the sink, toilet, and shower",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Water plants",
        description: "Water all the plants in the house",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Read assigned chapters",
        description: "Read chapters 6-9 in the textbook",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Complete homework",
        description: "Complete the assigned homework for the week",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Attend office hours",
        description: "Attend the professor's office hours to get help with a difficult concept",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Reply to emails",
        description: "Reply to all the emails in the inbox",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Update project plan",
        description: "Update the project plan with the latest changes and send it to the team",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Attend team meeting",
        description: "Attend the weekly team meeting to discuss progress and issues",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Deep clean the bathroom",
        description: "Clean and disinfect all surfaces, scrub tiles and grout, and organize the medicine cabinet",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mow the lawn",
        description: "Mow the front and back lawn and trim the edges",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Clean the fridge",
        description: "Throw away expired food, wipe down shelves and drawers, and organize items",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Prepare for presentation",
        description: "Prepare a 10-minute presentation on the assigned topic",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Submit research paper",
        description: "Submit a 2000-word research paper on a relevant topic",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Review lecture notes",
        description: "Review notes from the past week's lectures and organize them",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Prepare for meeting",
        description: "Prepare an agenda and presentation for the upcoming meeting",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Review contract",
        description: "Review the terms and conditions of the new contract and provide feedback",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Attend training session",
        description: "Attend a training session on the new software being implemented in the company",
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TodoItems', null, {});
  }
};
