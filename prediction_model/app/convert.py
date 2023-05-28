def convert_incidents_to_work(cursor, incident_list, included_source=[], includet_work_type=[]):
    result_list = []
    for incident in incident_list:
        query = f"SELECT DISTINCT source FROM incident_source WHERE name = '{incident}';"
        cursor.execute(query)
        results = cursor.fetchall()
        source = [x[0] for x in results]

        if source in included_source or len(included_source) == 0:
            query = f"SELECT DISTINCT work_name FROM work_incident WHERE incident_name = '{incident}';"
            cursor.execute(query)
            results = cursor.fetchall()
            works = [x[0] for x in results]
            for work in works:
                if work in includet_work_type or len(includet_work_type) == 0:
                    result_list.append(work)

    return result_list
