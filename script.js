document.getElementById("exploreBtn").addEventListener("click", () => {
  const main = document.getElementById("mainContent");
  main.style.display = "block";
  main.scrollIntoView({ behavior: "smooth" });
});

// Tooltips for better explanation
const explanations = {
  "Prediction Markets":
    "Markets where users bet on outcomes. AVSs verify results transparently.",
  "Lending Platforms":
    "Decentralized lending apps use verifiable compute for trustless collateral handling.",
  "Loyalty Systems":
    "Token-based loyalty apps need data availability and verification layers.",
  "Social Apps":
    "New Web3 social networks can plug into AVSs for moderation, feeds, and proof.",
  Oracles:
    "Provide external data to smart contracts. AVSs validate oracle integrity.",
  zkCoprocessors:
    "Zero-knowledge computation off-chain. EigenVerify checks the correctness.",
  "AI Verifiers":
    "Verifying ML outputs on-chain with transparency and reproducibility.",
  "Custom Services":
    "Developers can register their own AVS types — EigenLayer ensures security.",
  EigenDA:
    "Data Availability layer with high throughput and modular rollup support.",
  EigenVerify: "Verifies zero-knowledge proofs and off-chain computation.",
  EigenCompute: "Runs heavy compute tasks like AI, simulations, or analytics.",
  "EIGEN Token":
    "Used for restaking and ensures honest behavior via slashing/forking.",
  "EigenLayer Protocol":
    "Restaking mechanism enabling shared security for services (AVSs).",
};

const items = document.querySelectorAll(".grid-item");
items.forEach((item) => {
  const text = item.textContent.trim();
  if (explanations[text]) {
    item.setAttribute("title", explanations[text]);
  }
});
