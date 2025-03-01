import react from "../assets/icons/react.svg";
import secure from "../assets/icons/secure.svg";
import team from "../assets/icons/team.svg";
import ubntu from "../assets/icons/ubntu.svg";

export const navHeading = [
  { label: "About Us", href: "#" },
  { label: "Our Agents", href: "#" },
  { label: "Roadmap", href: "#" },
  { label: "Tokenomics", href: "#" },
];

export const workData = [
  {
    heading: "Seamless User Engagement",
    paratext: `Your journey starts by connecting your wallet and setting your interaction preferences. Once connected, the agent begins tracking your activities across DAOs, protocols, and governance proposals.
Using advanced integrations with blockchain APIs like Etherscan and The Graph, the agent logs critical events like:
Voting on governance proposals
Contributions to DAOs
Staking and other participation events
This data forms a personalized activity history, ensuring the agent understands your involvement across the crypto ecosystem.`,
    spantext: "1",
  },
  {
    heading: "SPersonalized Recommendations",
    paratext: `Our agent uses cutting-edge transformer-based models like RecBERT to analyze your historical activity. By identifying your interests and behavioral patterns, the agent recommends new DAOs, protocols, or projects that align with your preferences.
To further enhance these recommendations, the agent employs a Graph Neural Network (GNN) to map relationships between you and various entities in the blockchain space. This ensures you’re introduced to opportunities that resonate with your goals.`,
    spantext: "2",
  },
  {
    heading: "Automated Governance Participation",
    paratext: `Actively participating in governance can be time-consuming. That’s where the agent’s Reinforcement Learning (RL) models come in. These models, trained on historical governance data, automate your voting process by:
Simulating DAO voting scenarios using multi-agent RL
Evaluating and optimizing voting strategies on your behalf
This allows you to maintain meaningful contributions without needing to vote manually for every proposal, ensuring your governance impact remains consistent and effective.`,
    spantext: "3",
  },
  {
    heading: "Real-Time Analytics and Insights",
    paratext: `Stay informed about your influence within the ecosystem with real-time governance analytics. The agent delivers detailed insights, including:
Voting trends: Understand your voting patterns and their alignment with community decisions.
Impact analysis: Measure how your votes contribute to the success of proposals.
Loyalty scores: Track your engagement level across different projects.
With metrics like precision, recall, and F1-score, you can trust that the recommendations and automation are accurate and tailored to your needs.`,
    spantext: "4",
  },
];

export const sData = [
  {
    url: react,
    sHeading: "Advanced AI Models",
    sPara: "Cutting-edge machine learning for precision",
  },
  {
    url: secure,
    sHeading: "Comprehensive  Ecosystem",
    sPara: "Addressing every crypto and DeFi challenge.",
  },
  {
    url: team,
    sHeading: "User-Friendly Design",
    sPara: "Easy to use for both beginners and experts.",
  },
  {
    url: ubntu,
    sHeading: "Secure Infrastructure",
    sPara: "Blockchain-grade security and scalability.",
  },
];
