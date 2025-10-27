import { Job } from '../../decorators/job.decorator';
import { AbstractJob } from '../abstract.job';
import { PulsarClient } from '@jobber/pulsar';
import { FibonacciData } from './fibonacci-data.message';

@Job({
  name: 'Fibonacci',
  description: 'Generates Fibonacci numbers and store in the DB.',
})
export class FibonacciJob extends AbstractJob<FibonacciData> {
  protected messageClass = FibonacciData;

  constructor(pulsarClient: PulsarClient) {
    super(pulsarClient);
  }
}
