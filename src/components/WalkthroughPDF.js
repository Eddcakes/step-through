import React from 'react';
import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
  description: {
    fontSize: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    borderBottomStyle: 'solid',
    marginBottom: 20,
  },
  step: {
    fontSize: 12,
    paddingVertical: 8,
  },
  caption: {
    textAlign: 'center',
    fontSize: 8,
    color: '#4a5568',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  seperator: {
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    borderBottomStyle: 'solid',
    marginBottom: 10,
  },
});

export function WalkthroughPDF({ content }) {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <Text style={styles.title}>{content.title}</Text>
        <Text style={styles.description}>{content.description}</Text>
        {content.steps.map((step, index) => {
          return (
            <React.Fragment key={index}>
              <Text style={styles.step}>[ ] {step.text}</Text>
              {!step.image ? null : (
                <>
                  <Image src={step.image} />
                  <Text style={styles.caption}>{step.caption}</Text>
                </>
              )}
              <Text style={styles.seperator} />
            </React.Fragment>
          );
        })}
        <Text
          style={styles.pageNumber}
          fixed
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
}
