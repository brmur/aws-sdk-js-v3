import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";

/**
 * <p>A container for facet information.</p>
 */
export interface Bucket {
  __type?: "Bucket";
  /**
   * <p>The number of hits that contain the facet value in the specified facet field.</p>
   */
  count?: number;

  /**
   * <p>The  facet value being counted.</p>
   */
  value?: string;
}

export namespace Bucket {
  export const filterSensitiveLog = (obj: Bucket): any => ({
    ...obj
  });
  export const isa = (o: any): o is Bucket => __isa(o, "Bucket");
}

/**
 * <p>A container for the calculated facet values and counts.</p>
 */
export interface BucketInfo {
  __type?: "BucketInfo";
  /**
   * <p>A list of the calculated facet values and counts.</p>
   */
  buckets?: Bucket[];
}

export namespace BucketInfo {
  export const filterSensitiveLog = (obj: BucketInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is BucketInfo => __isa(o, "BucketInfo");
}

export type ContentType = "application/json" | "application/xml";

/**
 * <p>Information about any problems encountered while processing an upload request.</p>
 */
export interface DocumentServiceException
  extends __SmithyException,
    $MetadataBearer {
  name: "DocumentServiceException";
  $fault: "client";
  /**
   * <p>The description of the errors returned by the document service.</p>
   */
  message?: string;

  /**
   * <p>The return status of a document upload request, <code>error</code> or <code>success</code>.</p>
   */
  status?: string;
}

export namespace DocumentServiceException {
  export const filterSensitiveLog = (obj: DocumentServiceException): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentServiceException =>
    __isa(o, "DocumentServiceException");
}

/**
 * <p>A warning returned by the document service when an issue is discovered while processing an upload request.</p>
 */
export interface DocumentServiceWarning {
  __type?: "DocumentServiceWarning";
  /**
   * <p>The description for a warning returned by the document service.</p>
   */
  message?: string;
}

export namespace DocumentServiceWarning {
  export const filterSensitiveLog = (obj: DocumentServiceWarning): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentServiceWarning =>
    __isa(o, "DocumentServiceWarning");
}

/**
 * <p>The statistics for a field calculated in the request.</p>
 */
export interface FieldStats {
  __type?: "FieldStats";
  /**
   * <p>The number of documents that contain a value in the specified field in the result set.</p>
   */
  count?: number;

  /**
   * <p>The maximum value found in the specified field in the result set.</p>
   *        <p>If the field is numeric (<code>int</code>, <code>int-array</code>, <code>double</code>, or <code>double-array</code>), <code>max</code> is the string representation of a double-precision 64-bit floating point value. If the field is <code>date</code> or <code>date-array</code>, <code>max</code> is the string representation of a date with the format specified in <a href="http://tools.ietf.org/html/rfc3339">IETF RFC3339</a>: yyyy-mm-ddTHH:mm:ss.SSSZ.</p>
   */
  max?: string;

  /**
   * <p>The average of the values found in the specified field in the result set.</p>
   *        <p>If the field is numeric (<code>int</code>, <code>int-array</code>, <code>double</code>, or <code>double-array</code>), <code>mean</code> is the string representation of a double-precision 64-bit floating point value. If the field is <code>date</code> or <code>date-array</code>, <code>mean</code> is the string representation of a date with the format specified in <a href="http://tools.ietf.org/html/rfc3339">IETF RFC3339</a>: yyyy-mm-ddTHH:mm:ss.SSSZ.</p>
   */
  mean?: string;

  /**
   * <p>The minimum value found in the specified field in the result set.</p>
   *        <p>If the field is numeric (<code>int</code>, <code>int-array</code>, <code>double</code>, or <code>double-array</code>), <code>min</code> is the string representation of a double-precision 64-bit floating point value. If the field is <code>date</code> or <code>date-array</code>, <code>min</code> is the string representation of a date with the format specified in <a href="http://tools.ietf.org/html/rfc3339">IETF RFC3339</a>: yyyy-mm-ddTHH:mm:ss.SSSZ.</p>
   */
  min?: string;

  /**
   * <p>The number of documents that do not contain a value in the specified field in the result set.</p>
   */
  missing?: number;

  /**
   * <p>The standard deviation of the values in the specified field in the result set.</p>
   */
  stddev?: number;

  /**
   * <p>The sum of the field values across the documents in the result set. <code>null</code> for date fields.</p>
   */
  sum?: number;

  /**
   * <p>The sum of all field values in the result set squared.</p>
   */
  sumOfSquares?: number;
}

export namespace FieldStats {
  export const filterSensitiveLog = (obj: FieldStats): any => ({
    ...obj
  });
  export const isa = (o: any): o is FieldStats => __isa(o, "FieldStats");
}

/**
 * <p>Information about a document that matches the search request.</p>
 */
export interface Hit {
  __type?: "Hit";
  /**
   * <p>The expressions returned from a document that matches the search request.</p>
   */
  exprs?: { [key: string]: string };

  /**
   * <p>The fields returned from a document that matches the search request.</p>
   */
  fields?: { [key: string]: string[] };

  /**
   * <p>The highlights returned from a document that matches the search request.</p>
   */
  highlights?: { [key: string]: string };

  /**
   * <p>The document ID of a document that matches the search request.</p>
   */
  id?: string;
}

export namespace Hit {
  export const filterSensitiveLog = (obj: Hit): any => ({
    ...obj
  });
  export const isa = (o: any): o is Hit => __isa(o, "Hit");
}

/**
 * <p>The collection of documents that match the search request.</p>
 */
export interface Hits {
  __type?: "Hits";
  /**
   * <p>A cursor that can be used to retrieve the next set of matching documents when you want to page through a large result set.</p>
   */
  cursor?: string;

  /**
   * <p>The total number of documents that match the search request.</p>
   */
  found?: number;

  /**
   * <p>A document that matches the search request.</p>
   */
  hit?: Hit[];

  /**
   * <p>The index of the first matching document.</p>
   */
  start?: number;
}

export namespace Hits {
  export const filterSensitiveLog = (obj: Hits): any => ({
    ...obj
  });
  export const isa = (o: any): o is Hits => __isa(o, "Hits");
}

export type QueryParser = "dismax" | "lucene" | "simple" | "structured";

/**
 * <p>Information about any problems encountered while processing a search request.</p>
 */
export interface SearchException extends __SmithyException, $MetadataBearer {
  name: "SearchException";
  $fault: "client";
  /**
   * <p>A description of the error returned by the search service.</p>
   */
  message?: string;
}

export namespace SearchException {
  export const filterSensitiveLog = (obj: SearchException): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchException =>
    __isa(o, "SearchException");
}

/**
 * <p>Container for the parameters to the <code>Search</code> request.</p>
 */
export interface SearchRequest {
  __type?: "SearchRequest";
  /**
   * <p>Retrieves a cursor value you can use to page through large result sets.
   *          Use the <code>size</code> parameter to control the number of hits to include in each response. You can specify either the <code>cursor</code> or
   *          <code>start</code> parameter in a request; they are mutually exclusive. To get the first cursor, set the cursor value to <code>initial</code>. In subsequent requests, specify the cursor value returned in the hits section of the response.</p>
   *       <p>For more
   *          information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/paginating-results.html">Paginating Results</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  cursor?: string;

  /**
   * <p>Defines one or more numeric expressions that can be used to sort results or specify search criteria. You can also specify expressions as return fields.</p>
   *       <p>You specify the expressions in JSON using the form <code>{"EXPRESSIONNAME":"EXPRESSION"}</code>. You can define and use multiple expressions in a search request. For example:</p>
   *       <p><code>
   *          {"expression1":"_score*rating", "expression2":"(1/rank)*year"}
   *       </code> </p>
   *       <p>For information about the variables, operators, and functions you can use in expressions, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html#writing-expressions">Writing Expressions</a>
   *          in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  expr?: string;

  /**
   * <p>Specifies one or more fields for which to get facet information, and options that control how the facet information is returned. Each specified field must be facet-enabled in the domain configuration. The fields and options are specified in JSON using the form <code>{"FIELD":{"OPTION":VALUE,"OPTION:"STRING"},"FIELD":{"OPTION":VALUE,"OPTION":"STRING"}}</code>.</p>
   *          <p>You can specify the following faceting options:</p>
   *       <ul>
   *          <li>
   *             <p><code>buckets</code> specifies an array of the facet values or
   *                ranges to count. Ranges are specified using the same syntax that you use to search for a range of values.
   *                For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/searching-ranges.html">
   *                   Searching for a Range of Values</a> in the <i>Amazon CloudSearch Developer Guide</i>. Buckets are returned in the order they
   *                are specified in the request. The <code>sort</code> and <code>size</code> options are
   *                not valid if you specify <code>buckets</code>.</p>
   *          </li>
   *          <li>
   *             <p><code>size</code> specifies the maximum number of facets to include in the results. By
   *                default, Amazon CloudSearch returns counts for the top 10. The
   *                <code>size</code> parameter is only valid when you specify
   *                the <code>sort</code> option; it cannot be used in conjunction
   *                with <code>buckets</code>.</p>
   *          </li>
   *          <li>
   *             <p><code>sort</code> specifies how you want to sort the facets in
   *                the results: <code>bucket</code> or <code>count</code>. Specify
   *                <code>bucket</code> to sort alphabetically or numerically by
   *                facet value (in ascending order). Specify <code>count</code> to
   *                sort by the facet counts computed for each facet value (in
   *                descending order). To retrieve facet counts for particular
   *                values or ranges of values, use the <code>buckets</code> option
   *                instead of <code>sort</code>.</p>
   *          </li>
   *       </ul>
   *       <p>If no facet options are specified, facet counts are computed for all field values, the facets are sorted by facet count, and the top 10 facets are returned in the results.</p>
   *
   *       <p>To count particular buckets of values, use the <code>buckets</code> option. For example, the following request uses the <code>buckets</code> option to calculate and return facet counts by decade.</p>
   *       <p><code>
   *          {"year":{"buckets":["[1970,1979]","[1980,1989]","[1990,1999]","[2000,2009]","[2010,}"]}}
   *       </code></p>
   *
   *          <p>To sort facets by facet count, use the <code>count</code> option. For example, the following request sets the <code>sort</code> option to <code>count</code> to sort the facet values by facet count, with the facet
   *             values that have the most matching documents listed first. Setting the <code>size</code> option to 3 returns only the top three facet values.</p>
   *          <p><code>
   *             {"year":{"sort":"count","size":3}}
   *          </code></p>
   *
   *          <p>To sort the facets by value, use the <code>bucket</code> option. For example, the following  request sets the <code>sort</code> option to <code>bucket</code> to sort the facet values numerically by year, with earliest year listed first.</p>
   *          <p><code>
   *             {"year":{"sort":"bucket"}}
   *          </code></p>
   *       <p>For more
   *          information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/faceting.html">Getting and Using Facet Information</a>
   *          in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  facet?: string;

  /**
   * <p>Specifies a structured query that filters the results of a search without affecting how the results are scored and sorted. You use <code>filterQuery</code> in conjunction with the <code>query</code> parameter to filter the documents that match the constraints specified in the <code>query</code> parameter. Specifying a filter controls only which matching documents are included in the results, it has no effect on how they are scored and sorted. The <code>filterQuery</code> parameter supports the full structured query syntax.</p>
   *       <p>For more information about using filters, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/filtering-results.html">Filtering Matching Documents</a>
   *          in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  filterQuery?: string;

  /**
   * <p>Retrieves highlights for matches in the specified <code>text</code> or
   *          <code>text-array</code> fields. Each specified field must be highlight enabled in the domain configuration. The fields and options are specified in JSON using the form <code>{"FIELD":{"OPTION":VALUE,"OPTION:"STRING"},"FIELD":{"OPTION":VALUE,"OPTION":"STRING"}}</code>.</p>
   *       <p>You can specify the following highlight options:</p>
   *          <ul>
   *             <li>
   *                <code>format</code>: specifies the format of the data in the
   *                   text field: <code>text</code> or <code>html</code>. When data is
   *                   returned as HTML, all non-alphanumeric characters are encoded.
   *                   The default is <code>html</code>.
   *             </li>
   *             <li>
   *                <code>max_phrases</code>: specifies the maximum number of
   *                   occurrences of the search term(s) you want to highlight. By
   *                   default, the first occurrence is highlighted.
   *             </li>
   *             <li>
   *                <code>pre_tag</code>: specifies the string to prepend to an
   *                   occurrence of a search term. The default for HTML highlights is
   *                <code>&lt;em&gt;</code>. The default for text highlights is
   *                   <code>*</code>.
   *             </li>
   *             <li>
   *                <code>post_tag</code>: specifies the string to append to an
   *                   occurrence of a search term. The default for HTML highlights is
   *                   <code>&lt;/em&gt;</code>. The default for text highlights is
   *                   <code>*</code>.
   *             </li>
   *          </ul>
   *          <p>If no highlight options are specified for a field, the returned field text is treated as HTML and the first match is
   *             highlighted with emphasis tags:  <code>&lt;em>search-term&lt;/em&gt;</code>.</p>
   *             <p>For example, the following request retrieves highlights for the <code>actors</code> and <code>title</code> fields.</p>
   *                  <p> <code>{
   *     "actors": {},
   *     "title": {"format": "text","max_phrases": 2,"pre_tag": "<b>","post_tag": "</b>"}
   *                     }</code></p>
   */
  highlight?: string;

  /**
   * <p>Enables partial results to be returned if one or more index partitions are unavailable. When your search index is partitioned across multiple search instances, by default Amazon CloudSearch only returns results if every partition can be queried. This means that the failure of a single search instance can result in 5xx (internal server) errors. When you enable partial results, Amazon CloudSearch returns whatever results are available and includes the percentage of documents searched in the search results (percent-searched). This enables you to more gracefully degrade your users' search experience. For example, rather than displaying no results, you could display the partial results and a message indicating that the results might be incomplete due to a temporary system outage.</p>
   */
  partial?: boolean;

  /**
   * <p>Specifies the search criteria for the request. How you specify the search
   *          criteria depends on the query parser used for the request and the parser options
   *          specified in the <code>queryOptions</code> parameter. By default,
   *          the <code>simple</code> query parser is used to process requests. To use
   *          the <code>structured</code>, <code>lucene</code>, or <code>dismax</code> query parser,
   *          you must also specify the <code>queryParser</code> parameter.</p>
   *             <p>For more information about specifying search criteria, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/searching.html">Searching Your Data</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  query: string | undefined;

  /**
   * <p>Configures options for the query parser specified in the <code>queryParser</code> parameter. You specify the options in JSON using the following form <code>{"OPTION1":"VALUE1","OPTION2":VALUE2"..."OPTIONN":"VALUEN"}.</code></p>
   *
   *       <p>The options you can configure vary according to which parser you use:</p>
   *       <ul>
   *          <li><code>defaultOperator</code>: The default operator used to combine individual terms in the search string. For example: <code>defaultOperator: 'or'</code>. For the <code>dismax</code> parser, you specify a percentage that represents the percentage of terms in the search string (rounded down) that must match, rather than a default operator. A value of <code>0%</code> is the equivalent to OR, and a value of <code>100%</code> is equivalent to AND. The percentage must be specified as a value in the range 0-100 followed by the percent (%) symbol. For example, <code>defaultOperator: 50%</code>. Valid values: <code>and</code>, <code>or</code>, a percentage in the range 0%-100% (<code>dismax</code>). Default: <code>and</code> (<code>simple</code>, <code>structured</code>, <code>lucene</code>) or <code>100</code> (<code>dismax</code>). Valid for: <code>simple</code>, <code>structured</code>, <code>lucene</code>, and <code>dismax</code>.</li>
   *          <li><code>fields</code>: An array of the fields to search when no fields are specified in a search. If no fields are specified in a search and this option is not specified, all text and text-array fields are searched. You can specify a weight for each field to control the relative importance of each field when Amazon CloudSearch calculates relevance scores. To specify a field weight, append a caret (<code>^</code>) symbol and the weight to the field name. For example, to boost the importance of the <code>title</code> field over the <code>description</code> field you could specify: <code>"fields":["title^5","description"]</code>. Valid values: The name of any configured field and an optional numeric value greater than zero. Default: All <code>text</code> and <code>text-array</code> fields. Valid for: <code>simple</code>, <code>structured</code>, <code>lucene</code>, and <code>dismax</code>.</li>
   *          <li><code>operators</code>: An array of the operators or special characters you want to
   *             disable for the simple query parser. If you disable the
   *             <code>and</code>, <code>or</code>, or <code>not</code>
   *             operators, the corresponding operators (<code>+</code>,
   *             <code>|</code>, <code>-</code>) have no special meaning and
   *             are dropped from the search string. Similarly, disabling
   *             <code>prefix</code> disables the wildcard operator
   *             (<code>*</code>) and disabling <code>phrase</code> disables
   *             the ability to search for phrases by enclosing phrases in double
   *             quotes. Disabling precedence disables the ability to control
   *             order of precedence using parentheses. Disabling <code>near</code> disables
   *             the ability to use the ~ operator to perform a sloppy phrase search.
   *             Disabling the <code>fuzzy</code> operator disables the ability to use the ~ operator to perform a fuzzy search.
   *             <code>escape</code> disables the ability to use a backslash
   *             (<code>\</code>) to escape special characters within the
   *             search string. Disabling whitespace is an advanced option that
   *             prevents the parser from tokenizing on whitespace, which can be
   *             useful for Vietnamese. (It prevents Vietnamese words from being
   *             split incorrectly.) For example, you could disable all operators
   *             other than the phrase operator to support just simple term and
   *             phrase queries: <code>"operators":["and","not","or",
   *                "prefix"]</code>. Valid values: <code>and</code>, <code>escape</code>,
   *             <code>fuzzy</code>, <code>near</code>, <code>not</code>, <code>or</code>,
   *             <code>phrase</code>, <code>precedence</code>, <code>prefix</code>,
   *             <code>whitespace</code>. Default: All
   *             operators and special characters are enabled. Valid for:
   *             <code>simple</code>.</li>
   *          <li><code>phraseFields</code>: An array of the <code>text</code> or <code>text-array</code> fields you want to use for
   *             phrase searches. When the terms in the search string appear in
   *             close proximity within a field, the field scores higher. You can
   *             specify a weight for each field to boost that score. The
   *             <code>phraseSlop</code> option controls how much the matches
   *             can deviate from the search string and still be boosted. To
   *             specify a field weight, append a caret (<code>^</code>) symbol
   *             and the weight to the field name. For example, to boost phrase
   *             matches in the <code>title</code> field over the
   *             <code>abstract</code> field, you could specify:
   *             <code>"phraseFields":["title^3",
   *                "plot"]</code>
   *             Valid values: The name of any <code>text</code> or
   *             <code>text-array</code> field and an optional numeric value greater than zero. Default: No fields. If you don't specify any fields with <code>phraseFields</code>, proximity scoring is disabled even if <code>phraseSlop</code> is specified. Valid
   *             for: <code>dismax</code>.</li>
   *          <li><code>phraseSlop</code>: An integer value that specifies how much matches can deviate from the search phrase and still be boosted according to the weights specified in the <code>phraseFields</code> option; for example, <code>phraseSlop: 2</code>. You must also specify <code>phraseFields</code> to enable proximity scoring. Valid values: positive integers. Default: 0. Valid for: <code>dismax</code>.</li>
   *          <li><code>explicitPhraseSlop</code>: An integer value that specifies how much a match can deviate from the search phrase when the phrase is enclosed in double quotes in the search string. (Phrases that exceed this proximity distance are not considered a match.) For example, to specify a slop of three for dismax phrase queries, you would specify <code>"explicitPhraseSlop":3</code>. Valid values: positive integers. Default: 0. Valid for: <code>dismax</code>.</li>
   *          <li><code>tieBreaker</code>: When a term in the search string is found in a document's field, a score is calculated for that field based on how common the word is in that field compared to other documents. If the term occurs in multiple fields within a document, by default only the highest scoring field contributes to the document's overall score. You can specify a <code>tieBreaker</code> value to enable the matches in lower-scoring fields to contribute to the document's score. That way, if two documents have the same max field score for a particular term, the score for the document that has matches in more fields will be higher. The formula for calculating the score with a tieBreaker is <code>(max field score) + (tieBreaker) * (sum of the scores for the rest of the matching fields)</code>.
   *
   *             Set <code>tieBreaker</code> to 0 to disregard all but the highest scoring field (pure max): <code>"tieBreaker":0</code>. Set to 1 to sum the scores from all fields (pure sum): <code>"tieBreaker":1</code>. Valid values: 0.0 to 1.0. Default: 0.0. Valid for: <code>dismax</code>.
   *          </li>
   *       </ul>
   */
  queryOptions?: string;

  /**
   * <p>Specifies which
   *          query parser to use to process the request. If <code>queryParser</code> is not specified, Amazon CloudSearch
   *          uses the <code>simple</code> query parser.</p>
   *       <p>Amazon CloudSearch supports four query parsers:</p>
   *       <ul>
   *          <li>
   *             <code>simple</code>: perform simple searches of <code>text</code> and
   *                <code>text-array</code> fields. By default, the
   *                <code>simple</code> query parser searches all
   *                <code>text</code> and <code>text-array</code> fields. You
   *                can specify which fields to search by with the
   *                <code>queryOptions</code> parameter. If you prefix a search
   *                term with a plus sign (+) documents must contain the term to be considered a match.
   *                (This is the default, unless you configure the default operator with the <code>queryOptions</code> parameter.)
   *                You can use the <code>-</code> (NOT), <code>|</code>
   *                (OR), and <code>*</code> (wildcard) operators to exclude
   *                particular terms, find results that match any of the specified
   *                terms, or search for a prefix. To search for a phrase rather
   *                than individual terms, enclose the phrase in double quotes. For
   *                more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/searching-text.html">Searching for Text</a> in the <i>Amazon CloudSearch Developer Guide</i>.
   *          </li>
   *          <li>
   *             <code>structured</code>: perform advanced searches by combining
   *                multiple expressions to define the search criteria. You can also search
   *                within particular fields, search for values and ranges of values, and use
   *                advanced options such as term boosting, <code>matchall</code>, and <code>near</code>.
   *                For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/searching-compound-queries.html">Constructing Compound Queries</a> in the <i>Amazon CloudSearch Developer Guide</i>.
   *          </li>
   *          <li>
   *             <code>lucene</code>: search using the Apache Lucene query parser syntax.
   *                For more information, see <a href="http://lucene.apache.org/core/4_6_0/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#package_description">Apache Lucene Query Parser Syntax</a>.
   *          </li>
   *          <li>
   *             <code>dismax</code>: search using the simplified subset of the Apache Lucene query parser syntax
   *                defined by the DisMax query parser.
   *                For more information, see <a href="http://wiki.apache.org/solr/DisMaxQParserPlugin#Query_Syntax">DisMax Query Parser Syntax</a>.
   *          </li>
   *
   *       </ul>
   */
  queryParser?: QueryParser | string;

  /**
   * <p>Specifies the field and expression values to include in the response. Multiple fields or expressions are specified as a comma-separated list. By default, a search response includes all
   *          return enabled fields (<code>_all_fields</code>).
   *          To  return only the document IDs for the matching documents,
   *          specify <code>_no_fields</code>.
   *          To retrieve the relevance score calculated for each document,
   *          specify <code>_score</code>.</p>
   */
  return?: string;

  /**
   * <p>Specifies the maximum number of search hits to include in the response.</p>
   */
  size?: number;

  /**
   * <p>Specifies the fields or custom expressions to use to sort the search
   *          results. Multiple fields or expressions are specified as a comma-separated list.
   *          You must specify the sort direction (<code>asc</code> or
   *          <code>desc</code>) for each field; for example, <code>year
   *             desc,title asc</code>. To use a field to sort results, the field must be sort-enabled in
   *          the domain configuration. Array type fields cannot be used for sorting.
   *          If no <code>sort</code> parameter is specified, results are sorted by
   *          their default relevance scores in descending order: <code>_score
   *             desc</code>. You can also sort by document ID
   *          (<code>_id asc</code>) and version (<code>_version desc</code>).</p>
   *       <p>For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/sorting-results.html">Sorting Results</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  sort?: string;

  /**
   * <p>Specifies the offset of the first search hit you want to return. Note that the result set is zero-based; the first result is at index 0. You can specify either the <code>start</code> or <code>cursor</code> parameter in a request, they are mutually exclusive.</p>
   *       <p>For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/paginating-results.html">Paginating Results</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  start?: number;

  /**
   * <p>Specifies one or more fields for which to get statistics information. Each specified field must be facet-enabled in the domain configuration. The fields are specified in JSON using the form:</p>
   *       <code>{"FIELD-A":{},"FIELD-B":{}}</code>
   *       <p>There are currently no options supported for statistics.</p>
   */
  stats?: string;
}

export namespace SearchRequest {
  export const filterSensitiveLog = (obj: SearchRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchRequest => __isa(o, "SearchRequest");
}

/**
 * <p>The result of a <code>Search</code> request. Contains the documents that match the specified search criteria and any requested fields, highlights, and facet information.</p>
 */
export interface SearchResponse {
  __type?: "SearchResponse";
  /**
   * <p>The requested facet information.</p>
   */
  facets?: { [key: string]: BucketInfo };

  /**
   * <p>The documents that match the search criteria.</p>
   */
  hits?: Hits;

  /**
   * <p>The requested field statistics information.</p>
   */
  stats?: { [key: string]: FieldStats };

  /**
   * <p>The status information returned for the search request.</p>
   */
  status?: SearchStatus;
}

export namespace SearchResponse {
  export const filterSensitiveLog = (obj: SearchResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchResponse =>
    __isa(o, "SearchResponse");
}

/**
 * <p>Contains the resource id (<code>rid</code>) and the time it took to process the request (<code>timems</code>).</p>
 */
export interface SearchStatus {
  __type?: "SearchStatus";
  /**
   * <p>The encrypted resource ID for the request.</p>
   */
  rid?: string;

  /**
   * <p>How long it took to process the request, in milliseconds.</p>
   */
  timems?: number;
}

export namespace SearchStatus {
  export const filterSensitiveLog = (obj: SearchStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchStatus => __isa(o, "SearchStatus");
}

/**
 * <p>Container for the suggestion information returned in a <code>SuggestResponse</code>.</p>
 */
export interface SuggestModel {
  __type?: "SuggestModel";
  /**
   * <p>The number of documents that were found to match the query string.</p>
   */
  found?: number;

  /**
   * <p>The query string specified in the suggest request.</p>
   */
  query?: string;

  /**
   * <p>The documents that match the query string.</p>
   */
  suggestions?: SuggestionMatch[];
}

export namespace SuggestModel {
  export const filterSensitiveLog = (obj: SuggestModel): any => ({
    ...obj
  });
  export const isa = (o: any): o is SuggestModel => __isa(o, "SuggestModel");
}

/**
 * <p>Container for the parameters to the <code>Suggest</code> request.</p>
 */
export interface SuggestRequest {
  __type?: "SuggestRequest";
  /**
   * <p>Specifies the string for which you want to get suggestions.</p>
   */
  query: string | undefined;

  /**
   * <p>Specifies the maximum number of suggestions to return.</p>
   */
  size?: number;

  /**
   * <p>Specifies the name of the suggester to use to find suggested matches.</p>
   */
  suggester: string | undefined;
}

export namespace SuggestRequest {
  export const filterSensitiveLog = (obj: SuggestRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SuggestRequest =>
    __isa(o, "SuggestRequest");
}

/**
 * <p>Contains the response to a <code>Suggest</code> request.</p>
 */
export interface SuggestResponse {
  __type?: "SuggestResponse";
  /**
   * <p>The status of a <code>SuggestRequest</code>. Contains the resource ID (<code>rid</code>) and how long it took to process the request (<code>timems</code>).</p>
   */
  status?: SuggestStatus;

  /**
   * <p>Container for the matching search suggestion information.</p>
   */
  suggest?: SuggestModel;
}

export namespace SuggestResponse {
  export const filterSensitiveLog = (obj: SuggestResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is SuggestResponse =>
    __isa(o, "SuggestResponse");
}

/**
 * <p>Contains the resource id (<code>rid</code>) and the time it took to process the request (<code>timems</code>).</p>
 */
export interface SuggestStatus {
  __type?: "SuggestStatus";
  /**
   * <p>The encrypted resource ID for the request.</p>
   */
  rid?: string;

  /**
   * <p>How long it took to process the request, in milliseconds.</p>
   */
  timems?: number;
}

export namespace SuggestStatus {
  export const filterSensitiveLog = (obj: SuggestStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is SuggestStatus => __isa(o, "SuggestStatus");
}

/**
 * <p>An autocomplete suggestion that matches the query string specified in a <code>SuggestRequest</code>.</p>
 */
export interface SuggestionMatch {
  __type?: "SuggestionMatch";
  /**
   * <p>The document ID of the suggested document.</p>
   */
  id?: string;

  /**
   * <p>The relevance score of a suggested match.</p>
   */
  score?: number;

  /**
   * <p>The string that matches the query string specified in the <code>SuggestRequest</code>.</p>
   */
  suggestion?: string;
}

export namespace SuggestionMatch {
  export const filterSensitiveLog = (obj: SuggestionMatch): any => ({
    ...obj
  });
  export const isa = (o: any): o is SuggestionMatch =>
    __isa(o, "SuggestionMatch");
}

/**
 * <p>Container for the parameters to the <code>UploadDocuments</code> request.</p>
 */
export interface UploadDocumentsRequest {
  __type?: "UploadDocumentsRequest";
  /**
   * <p>The format of the batch you are uploading. Amazon CloudSearch supports two document batch formats:</p>
   *       <ul>
   *          <li>application/json</li>
   *          <li>application/xml</li>
   *       </ul>
   */
  contentType: ContentType | string | undefined;

  /**
   * <p>A batch of documents formatted in JSON or HTML.</p>
   */
  documents: Readable | ReadableStream | Blob | undefined;
}

export namespace UploadDocumentsRequest {
  export const filterSensitiveLog = (obj: UploadDocumentsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UploadDocumentsRequest =>
    __isa(o, "UploadDocumentsRequest");
}

/**
 * <p>Contains the response to an <code>UploadDocuments</code> request.</p>
 */
export interface UploadDocumentsResponse {
  __type?: "UploadDocumentsResponse";
  /**
   * <p>The number of documents that were added to the search domain.</p>
   */
  adds?: number;

  /**
   * <p>The number of documents that were deleted from the search domain.</p>
   */
  deletes?: number;

  /**
   * <p>The status of an <code>UploadDocumentsRequest</code>.</p>
   */
  status?: string;

  /**
   * <p>Any warnings returned by the document service about the documents being uploaded.</p>
   */
  warnings?: DocumentServiceWarning[];
}

export namespace UploadDocumentsResponse {
  export const filterSensitiveLog = (obj: UploadDocumentsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UploadDocumentsResponse =>
    __isa(o, "UploadDocumentsResponse");
}
