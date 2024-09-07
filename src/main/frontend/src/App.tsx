import {Box, Container} from "@mui/material";

function App() {
  return (

      <Container maxWidth="lg">
          <Box sx={{my: 4}}>
              <div className='App'>
                  Take control of your Investments with Finance Portfolio App!

                  <h2> Why Finance Portfolio App? </h2>
                  <table>
                      <ul>
                          <li><b>Track Your Portfolios</b>: Keep a record of all your investments.</li>
                          <li><b>Budget Planning</b>: Set monthly or weekly budgets for different categories like
                              groceries, entertainment, and more. Stay within your limits and save more!
                          </li>
                          <li><b>Insightful Reports</b>: Get detailed reports on your spending habits. Find out what
                              you're spending the most on and where you can cut back.
                          </li>
                          <li><b>Real-Time Updates</b>: Your expenses are updated in real time, so you always have the
                              most current information at your fingertips.
                          </li>
                          <li><b>Secure and Private</b>: Your data is encrypted and stored securely. We respect your
                              privacy and never share your information.
                          </li>
                      </ul>
                  </table>

                  Join us today and start managing your portfolios like a pro!
              </div>
          </Box>
      </Container>
  )
}

export default App
