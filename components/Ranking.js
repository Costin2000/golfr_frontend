import Link from 'next/link'

const Ranking = ({ totalScore, userId, userName, nrMatches, average }) =>
  <>
    <div className="flex flex-row p-3 my-4 shadow-md lg:w-1/3 md:w-1/2">
      <div className="w-5/6">
        <div className="italic text-gray-400">
          <Link href={`/golfers/${userId}`}>
            {userName}
          </Link>
        </div>
        <div>
          {` With a total score of ${totalScore} acumulated in ${nrMatches}
          matches has an average score per game of ${average}`}
        </div>
      </div>

    </div>
  </>


export default Ranking
