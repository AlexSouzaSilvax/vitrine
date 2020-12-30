package Util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexao {

    private static Connection conexao;
    private static final String URL_CONEXAO = "jdbc:mysql://127.0.0.1/vitrine?useTimezone=true&serverTimezone=UTC&useSSL=false";
    private static final String USUARIO = "root";
    private static final String SENHA = "1234";

    public static Connection getConexao() {
        if (conexao == null) {
            try {
                Class.forName("com.mysql.jdbc.Driver");
                conexao = DriverManager.getConnection(URL_CONEXAO, USUARIO, SENHA);
                //System.out.println("OK");
            } catch (SQLException e) {
                System.out.println("(Conexão) Falha ao conectar com banco de dados. " + e.getMessage());
            } catch (ClassNotFoundException ex) {
                System.out.println("deu merda2 " + ex.getMessage());
            } catch (ClassCastException exs) {
                System.out.println("deu merda3 " + exs.getMessage());
            }
        }
        return conexao;
    }

    public static void fecharConexao() {
        if (conexao != null) {
            try {
                conexao.close();
                conexao = null;
            } catch (SQLException ex) {
                System.out.println("Erro ao fechar conexão: " + ex.getMessage());
            }
        }
    }
}
