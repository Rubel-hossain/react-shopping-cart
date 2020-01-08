const currencyFormat = (num) => {
      return "$" + Number(num.toFixed(2)) + " ";
}

export { currencyFormat }