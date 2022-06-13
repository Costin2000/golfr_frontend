import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import ScoreCard from '../../components/ScoreCard'
import useGolferName from '../../lib/useGolferName'
import useGolferScores from '../../lib/useGolferScores'
import useUserStats from '../../lib/useUserStats'
import { useState, useEffect } from 'react'
import { getUsername } from '../../lib/userAuth'

const GolferScores = () => {
  const router = useRouter()
  const { id } = router.query
  const { name, errorName } = useGolferName(id)
  const { scores, errorScores } = useGolferScores(id)
  const stats = useUserStats(scores)

  const [ username, setUsername ] = useState('')
  useEffect(() => setUsername(getUsername()), [])

  return (
    <Layout>
      { (errorName || errorScores) ? (
        errorName
      ) : (
        name && (
          <>
            <h1 className="underline cursor-pointer text-3xl mb-5">
              {(username === name) ? 'My' : name + "'s"} profile:
            </h1>
            <h1 className="text-xl mb-3"> Stats:</h1>
            <ul>
              <li> Number of matches played: {stats.nr_matches}</li>
              <li> Best score: {stats.best_score}</li>
              <li> Average score per game: {stats.average}</li>
            </ul>

            <h1 className="text-xl mb-3 mt-5"> Scores:</h1>
            {scores && scores.map(score => (
              <ScoreCard
                key={score.id}
                id={score.id}
                totalScore={score.total_score}
                playedAt={score.played_at}
                userId={score.user_id}
                userName={name}
              />
            ))}
          </>
        )
      )}
    </Layout>
  )
}

export default GolferScores
