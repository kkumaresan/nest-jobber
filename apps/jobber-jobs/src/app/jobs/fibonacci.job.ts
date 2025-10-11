import { Job } from '../decorators/job.decorator';
import { AbstractJob } from './job';

@Job({
  name: 'Fibonacci',
  description: 'Generates Fibonacci numbers and store in the DB.',
})
export class FibonacciJob extends AbstractJob {}
