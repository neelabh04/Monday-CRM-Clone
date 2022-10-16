import TicketCard from "../components/TicketCard";

const Dashboard = () => {
  const tickets = [
    {
      category: "Q1 2022",
      color: "red",
      title: "NFT Safety 101 Video",
      owner: "Ania Kubow",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C5603AQHz0XsNvXLBhw/profile-displayphoto-shrink_400_400/0/1610123921178?e=1671667200&v=beta&t=a6m1xm8f2Kte0nzH3a_qrDhIx_y6QYPZ5OaC1iKORwc",
      status: "done",
      priority: 5,
      progress: 40,
      description:
        "Make a video showcasing how to work with NFTs safely, including how to know if one is not genuine.",
      timestamp: "2022-02-11T07:36:17+0000",
    },
    {
      category: "Q1 2022",
      color: "red",
      title: "Build and sell AI Model",
      owner: "Ania Kubow",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C5603AQHz0XsNvXLBhw/profile-displayphoto-shrink_400_400/0/1610123921178?e=1671667200&v=beta&t=a6m1xm8f2Kte0nzH3a_qrDhIx_y6QYPZ5OaC1iKORwc",
      status: "working on it",
      priority: 2,
      progress: 70,
      description: "Make a video about AI",
      timestamp: "2022-02-13T07:36:17+0000",
    },
    {
      category: "Q2 2022",
      color: "blue",
      title: "Build a bot",
      owner: "Ania Kubow",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C5603AQHz0XsNvXLBhw/profile-displayphoto-shrink_400_400/0/1610123921178?e=1671667200&v=beta&t=a6m1xm8f2Kte0nzH3a_qrDhIx_y6QYPZ5OaC1iKORwc",
      status: "working on it",
      priority: 3,
      progress: 10,
      description: "Make a video about creating a bot",
      timestamp: "2022-02-15T07:36:17+0000",
    },
  ];

  const colors = [
    'rgb(255, 179, 186)',
    'rgb(255, 223, 186)',
    'rgb(255, 255, 186)',
    'rgb(186, 255, 201)',
    'rgb(186, 255, 255)'
  ]


  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  console.log(uniqueCategories);

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
