import Layout from '../components/Layout'
import useUsers from '../lib/useUsers'
import useRankings from '../lib/useRankings'
import Ranking from '../components/Ranking'

const Rankings = () => {
  const { rankings, error } = useRankings()

  return (
    <Layout>
      <h1 className="text-3xl"> Current leaderboard </h1>
      <>
        {error ? (
          error
        ) : (
          <>
            {rankings && rankings.map(ranking => (
              <Ranking
                key={ranking.id}
                totalScore={ranking.total_score}
                nrMatches={ranking.number_matches}
                userId={ranking.user_id}
                userName={ranking.user_name}
                average={ranking.average}
              />
            ))}
          </>
        )}
      </>
    </Layout>
  )
}

export default Rankings
