export const checkData = async (req, res) => {
  try {
    res.status(200).send('OK');
  } catch (error) {
    console.error('listUsers() -> unknown', { error });
    res.status(500).send('Internal Server Error');
  }
};
