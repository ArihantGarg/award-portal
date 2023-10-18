<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Button } from 'flowbite-svelte';
  export let data;
  import { user } from './store';
  let submissionId = data.submissionId;
  let submission = data.submission;
  let grandTotalScore = 0;
  let grandTotalMaxScore = 0;
</script>

<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-10">
      <h1>Award Application Details</h1>
      
      {#if submission}
        <Table bordered hover striped>
          <TableHead>
            <TableBodyRow>
              <TableHeadCell>Description</TableHeadCell>
              <TableHeadCell>Value</TableHeadCell>
            </TableBodyRow>
          </TableHead>
          <TableBody>
              <TableBodyRow>
                <TableBodyCell><strong>Award Name</strong></TableBodyCell>
                <TableBodyCell>{submission.award.name}</TableBodyCell>
              </TableBodyRow>
              <TableBodyRow>
                <TableBodyCell><strong>Application No.</strong></TableBodyCell>
                <TableBodyCell>{submissionId}</TableBodyCell>
              </TableBodyRow>
              <TableBodyRow>
                <TableBodyCell><strong>Submission Date</strong></TableBodyCell>
                <TableBodyCell>{new Date(submission.submitted).toLocaleDateString()}</TableBodyCell>
              </TableBodyRow>
              <TableBodyRow>
                <TableBodyCell><strong>Applicant Details</strong></TableBodyCell>
                <TableBodyCell>
                  <strong>Name:</strong> {submission.applicant.name}<br>
                  <strong>IEEE No.:</strong> {submission.applicant.ieeeMembership}<br>
                  <strong>IEEE Membership Grade:</strong> {submission.applicant.grade}<br>
                  <strong>IEEE Section:</strong> {submission.applicant.section}<br>
                  <strong>Phone No.:</strong> {submission.applicant.phone}<br>
                  <strong>Affiliation:</strong> {submission.applicant.affiliation}
                </TableBodyCell>
              </TableBodyRow>
              <TableBodyRow>
                <TableBodyCell><h2>Applicant's Responses</h2></TableBodyCell>
                <TableBodyCell>
                  <ul>
                    {#each Object.entries(submission.response) as [question, answer]}
                      <li>
                        <strong>{question}:</strong><br>{answer}
                      </li>
                    {/each}
                  </ul>
                </TableBodyCell>
                <TableBodyCell><strong></strong></TableBodyCell>
              </TableBodyRow>
          </TableBody>
        </Table>

        {#if $user.type === 'Admin' || $user.type === 'Reviewer'}
        <h2>Scores Assigned by the Reviewers</h2>
        <Table bordered hover striped>
          <TableHead>
            <TableBodyRow>
              <TableHeadCell>Reviewer</TableHeadCell>
                <TableHeadCell>Scores</TableHeadCell>
              <TableHeadCell>Total Score</TableHeadCell>
            </TableBodyRow>
          </TableHead>
          <TableBody>
            {#each submission.assessment as assessment}
              <TableBodyRow>
                <TableBodyCell>{assessment.reviewer.name}</TableBodyCell>
                <TableBodyCell>
                  <ol>
                    {#each Object.entries(assessment.review) as [metricname, details]}
                    <li>{metricname}: {details.score}/{details.maxScore}</li>
                    {/each}
                  </ol>
                </TableBodyCell>
                <TableBodyCell>
                  {(() => {
                    const totals = Object.values(assessment.review).reduce((acc, metricDetails) => {
                        acc.score += metricDetails.score;
                        acc.maxScore += metricDetails.maxScore;
                        return acc;
                    }, { score: 0, maxScore: 0 });
                    grandTotalScore += totals.score;
                    grandTotalMaxScore += totals.maxScore;
                    return `${totals.score}/${totals.maxScore}`;
                })()}
                </TableBodyCell>
              </TableBodyRow>
            {/each}
            <TableBodyRow>
              <TableBodyCell><strong>Grand Total</strong></TableBodyCell>
              <TableBodyCell></TableBodyCell>
              <TableBodyCell><strong>{grandTotalScore}/{grandTotalMaxScore}</strong></TableBodyCell>
            </TableBodyRow>
          </TableBody>
        </Table>
        {/if}

        {#if $user.type === 'Reviewer'}
        <Button size="md" color="green" href={`assigngrade/${submissionId}`} shadow pill>Assign Score</Button>
        {/if}
      {:else}
        <h1 class="h3">No submission found</h1>
      {/if}
    </div>
  </div>
</div>

<!-- You can add a footer here if needed -->
