import useUsers from './useUsers'

const useRankings = () => {
  const { users, error } = useUsers()

  const rankings = []
  if (users !== undefined) {
    for (const user of users) {
      let totalScore = 0
      for (const score of user.scores) {
        totalScore += score.total_score
      }
      const average = Math.round(totalScore / user.scores.length * 100) / 100
      const numberMatches = user.scores.length

      rankings.push(
        {
          user_id: user.id,
          user_name: user.name,
          number_matches: numberMatches,
          total_score: totalScore,
          average: average,
        }
      )
    }
    rankings.sort((a, b) => b.average - a.average)
  }

  return {
    rankings: rankings,
    error: error,
  }
}

export default useRankings
