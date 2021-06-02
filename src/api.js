//Base URL
const base_url = "https://api.rawg.io/api/"

// Date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1
  if (month < 10) {
    return `0${month}`
  } else {
    return month
  }
}

//Get current day
const getCurrentDay = () => {
  const day = new Date().getDate()
  if (day < 10) {
    return `0${day}`
  } else {
    return day
  }
}

//Current day/month/year
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1} ${currentMonth} ${CurrentDay}`
const nextYear = `${currentYear + 1} ${currentMonth} ${CurrentDay}`

//Popular Games
const popular_games = `games?dates=${lastYear}, ${currentDate}&ordering=-rating&page_size=10`

// Final URL
export const popularGamesURL = () => `${base_url}${popular_games}`
