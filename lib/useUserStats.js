import useGolferScores from './useGolferScores'

const useUserStats = scores => {

  if (!scores || scores === []) {
    return {
      nr_matches: 0,
      best_score: 0,
      average: 0,
    }
  }

  const numberMatches = scores.length
  let bestScore = 0
  let totalScore = 0
  for (const score of scores) {
    totalScore += score.total_score
    if (bestScore < score.total_score) {
      bestScore = score.total_score
    }
  }
  const average = Math.round(totalScore / numberMatches * 100) / 100

  return {
    nr_matches: numberMatches,
    best_score: bestScore,
    average: average,
  }
}

export default useUserStats
