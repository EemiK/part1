import { useState } from "react"

const Button = ({ handleClicks, text }) => (
  <button onClick={handleClicks}>
    {text}
  </button>
)

const StatisticLine = ({ name, value }) => {
  if (name == 'positive') return (
    <tr>
      <td>{name}</td>
      <td>{value} %</td>
    </tr>
  )
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ names, values }) => {
  if (values[3] == 0) return <div>No feedback given</div>

  return (
    <table>
      <tbody>
        <StatisticLine name={names[0]} value={values[0]} />
        <StatisticLine name={names[1]} value={values[1]} />
        <StatisticLine name={names[2]} value={values[2]} />
        <StatisticLine name={names[3]} value={values[3]} />
        <StatisticLine name={names[4]} value={values[4]} />
        <StatisticLine name={names[5]} value={values[5]} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Sum = () => good + neutral + bad

  const Average = () => (good - bad) / Sum()

  const Positive = () => (good / Sum()) * 100

  const stats = {
    names: ['good', 'neutral', 'bad', 'sum', 'average', 'positive'],
    values: [good, neutral, bad, Sum(), Average(), Positive()]
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClicks={() => setGood(good + 1)} text={'good'} />
      <Button handleClicks={() => setNeutral(neutral + 1)} text={'neutral'} />
      <Button handleClicks={() => setBad(bad + 1)} text={'bad'} />
      <h1>statistics</h1>
      <Statistics names={stats.names} values={stats.values} />
    </div>
  )
}

export default App
