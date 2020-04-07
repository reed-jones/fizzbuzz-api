import { NowRequest, NowResponse } from '@now/node'

export default (req: NowRequest, res: NowResponse) => {
  const number = +req.query.number;

  if (Number.isNaN(number)) {
    res.statusCode = 422
    return res.json({ original: req.query.number, error: 'Not a valid number' })
  }

  let answer = '';
  if (!(number % 3)) answer += 'fizz'
  if (!(number % 5)) answer += 'buzz'
  if (!answer) answer = `${req.query.number}`

  return res.json({ original: req.query.number, solution: answer })
}
