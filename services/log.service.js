import chalk from "chalk";

const printError = (error) => {
  console.log(chalk.bgRed(` ERROR `) + ` ${error}`)
}

const printSuccess = (success) => {
  console.log(chalk.bgGreen(` SUCCESS `) + ` ${success}`)
}

const printHelp = () => {
  console.log(chalk.bgCyan(` HELP `) + `
  Без параметров - вывод погоды
  -s [CITY] - установка города
  -h - вывод помощи
  -t [API-KEY] - для сохранения токена
  `)
}

const printWeather = (res, icon) => {
  console.log(chalk.bgYellow(` WEATHER `) + ` Погода в городе ${res.name}
  ${icon} ${res.weather[0].description}
  Температура: ${res.main.temp} (ощущается как: ${res.main.feels_like})
  Влажность: ${res.main.humidity}
  Скорость ветра: ${res.wind.speed}`)
}

export {printError, printSuccess, printHelp, printWeather}
