export const boardInitialData = [
  // Scheduled
  { id: (Date.now() + 1).toString(), title: "Plan the next release.", column: "scheduled" },
  { id: (Date.now() + 2).toString(), title: "Review project scope.", column: "scheduled" },
  { id: (Date.now() + 3).toString(), title: "Prepare sprint tasks.", column: "scheduled" },
  { id: (Date.now() + 4).toString(), title: "Discuss major features.", column: "scheduled" },

  // To Do
  { id: (Date.now() + 5).toString(), title: "Set up initial environment.", column: "todo" },
  { id: (Date.now() + 6).toString(), title: "Refactor existing code base.", column: "todo" },
  { id: (Date.now() + 7).toString(), title: "Write initial tests.", column: "todo" },
  { id: (Date.now() + 8).toString(), title: "Implement main logic.", column: "todo" },
  { id: (Date.now() + 9).toString(), title: "Integrate with backend.", column: "todo" },
  { id: (Date.now() + 10).toString(), title: "Polish user interface.", column: "todo" },
  { id: (Date.now() + 11).toString(), title: "Finalize data schema.", column: "todo" },

  // Doing
  { id: (Date.now() + 12).toString(), title: "Coding MVP feature.", column: "doing" },
  { id: (Date.now() + 13).toString(), title: "Debug an edge case.", column: "doing" },

  // Done
  { id: (Date.now() + 14).toString(), title: "Merge the latest PR.", column: "done" },
  { id: (Date.now() + 15).toString(), title: "Clean up old branches.", column: "done" },
  { id: (Date.now() + 16).toString(), title: "Launch the final build.", column: "done" },
];
