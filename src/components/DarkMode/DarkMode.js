import React, {useState} from 'react';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./GlobalStyles"
import { lightTheme, darkTheme } from "./Themes"
import {UseDarkMode} from './UseDarkMode'
import Toggle from './Toggle'

const styles = {
  mar: {
    margin:'10px'
  },
}

const DarkMode = () => {
  const [theme, themeToggler, mountedComponent] = UseDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
        <div style={styles.mar}>
          <Toggle theme={theme} toggleTheme={themeToggler} />
            <section>
              <h2>COVID-19 gargle test kits now available in Surrey schools</h2>
              <div>All Surrey elementary and secondary students now have access to COVID-19 gargle tests, says Fraser Health.</div>
            </section>
            <section>
              <h2>B.C. records another 694 cases of COVID-19, marks 2M vaccine doses</h2>
              <div>VANCOUVER -- B.C. health officials say another 694 cases of COVID-19 have been recorded in the province.</div>
            </section>
            <section>
              <h2>B.C. records first case of rare blood clot after AstraZeneca vaccine</h2>
              <div>VANCOUVER -- B.C. has recorded its first case of a rare response to the AstraZeneca COVID-19 vaccine that causes blood clots.</div>
            </section>
        </div>
    </ThemeProvider>
    )
  }
  
export default DarkMode


// https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/
// https://codesandbox.io/s/inspiring-khorana-f7c0v?fontsize=14&hidenavigation=1&theme=dark