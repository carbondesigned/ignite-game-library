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
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

//Popular Games
const popular_games = `games?key=f00266ed948c4ee8a132c8b6873d1078&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `games?key=f00266ed948c4ee8a132c8b6873d1078&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const new_games = `games?key=f00266ed948c4ee8a132c8b6873d1078&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

// Final URL
export const popularGamesURL = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL = () => `${base_url}${new_games}`

// Game Details

export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=f00266ed948c4ee8a132c8b6873d1078`

//https://api.rawg.io/api/games/604006?key=f00266ed948c4ee8a132c8b6873d1078

//Screenshot
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=f00266ed948c4ee8a132c8b6873d1078`
