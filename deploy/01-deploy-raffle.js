module.exports = async function ({ getNamedAccounts, deployment }) {
  const { deploy, log } = deployment;
  const { deployer } = await getNamedAccounts();
};
