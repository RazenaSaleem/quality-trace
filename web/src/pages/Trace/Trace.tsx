import {withTracker} from 'ga-4-react';
import {useParams} from 'react-router-dom';
import {ReactFlowProvider} from 'react-flow-renderer';
import Layout from 'components/Layout';
import AssertionFormProvider from '../../components/AssertionForm/AssertionFormProvider';
import TestRunProvider from '../../providers/TestRun';
import TestDefinitionProvider from '../../providers/TestDefinition';
import TraceContent from './TraceContent';

const TracePage = () => {
  const {testId = '', runId = ''} = useParams();

  return (
    <ReactFlowProvider>
      <TestRunProvider testId={testId} runId={runId}>
        <TestDefinitionProvider testId={testId} runId={runId}>
          <AssertionFormProvider testId={testId}>
            <Layout>
              <TraceContent />
            </Layout>
          </AssertionFormProvider>
        </TestDefinitionProvider>
      </TestRunProvider>
    </ReactFlowProvider>
  );
};

export default withTracker(TracePage);
